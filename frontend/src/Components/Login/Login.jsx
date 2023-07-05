import './Login.css'

const Login = () => {
    return (
        <>
            <body>
                <div> <h1>User Login</h1></div>
                <form method="post" action='mahogany62604@gmail.com'>
                    <fieldset>
                        <input type="text" placeholder="Username" id="user-name" required />
                        <input type="password" placeholder="Password" id="password" required />  </fieldset>
                    <fieldset>
                        <input type="checkbox" id='remember' required /> <label htmlFor="remember">Remember Me</label> 
                        <a href='#new-password'>Forgot Password?</a>
                    </fieldset>
                    <input type='submit' value='submit' />
                </form>
            </body>
        </>
    )
}
export default Login