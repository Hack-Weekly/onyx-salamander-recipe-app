import './Login.css'

const Login = () => {
    return (
        <>
            <body>
                <div> <h1>User Login</h1></div>
                <form method="post" action='mahogany62604@gmail.com'>
                    <fieldset>
                        <input type="text" placeholder="Username" id="user-name" required></input>
                        <input type="password" placeholder="Password" id="password" required></input>  </fieldset>
                    <fieldset>
                        <input type="checkbox" id='remember' required>Remember Me</input>
                        <a href='#new-password'>Forgot Password?</a>
                    </fieldset>
                    <input type='submit' value='submit'></input>
                </form>
            </body>
        </>
    )
}
export default Login