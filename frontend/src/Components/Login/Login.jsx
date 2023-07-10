import './Login.css'
import { useState } from 'react';

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        fetch('http://127.0.0.1:8000/login/', {
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
            <div> <h1>User Login</h1></div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input type="text" placeholder="Username" id="user-name" required />
                    <input type="password" placeholder="Password" id="password" required />  
                </fieldset>
                <fieldset>
                    <a href='#new-password'>Forgot Username/Password?</a>
                </fieldset>
                <input type='submit' value='submit' />
            </form>
            <p>Don't have an account?</p>
            <p><a href='Register.jsx'> Sign up now!</a></p>
        </div >
        
    )
}
export default Login