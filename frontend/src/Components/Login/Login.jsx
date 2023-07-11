import './Login.css'
import { useState } from 'react';
import { Header } from '../Header/Header';

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then(res => res.json()).then(data => {
            if (data.success) {
                console.log('login successful');
            } else {
                console.log('Login failed!');
            }
            }).catch((error) => {
                console.error('Error:', error);
            });
        }

    return (
        
        <div id='loginComponent'>
            <header>
                <Header />
            </header>
            <div id='formContainer' >
                <h1>Login</h1>
                <br />
                <form id='loginForm' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="usernameField" 
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="passwordField" 
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />  
                    <a href='#new-password' className='text-bold'>Forgot Username/Password?</a>
                    <input className='submitBtn' type='submit' value='Login' />
                </form>
                <p>Don't have an account?</p>
                <p><a href='Register.jsx'> Sign up now!</a></p>
            </div>    
        </div >
        
    )
}
export default Login