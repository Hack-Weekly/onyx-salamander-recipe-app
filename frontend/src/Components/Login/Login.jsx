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
                        <a href='#new-password'>Forgot Username/Password?</a>
                    </fieldset>
                    <input type='submit' value='submit' />
                </form>
                <p>Don't have an account?</p>
                <p><a href='Register.jsx'> Sign up now!</a></p>

            </body >
        </>
    )
}
export default Login