import Logo from './assets/logo.png';

const Login = () => {
  return (
    <div className="container">
        <div className="logo">
            <img src={Logo} alt="logo" />

        </div>

        <div className="input-container">
            <label htmlFor="Email"> 
                <input type="email" name="email" id="Email" placeholder="Email" />
            </label>
            <label htmlFor="Password">
                <input type="password" name="password" id="Password"placeholder="Password" />
            </label>
            <button type="submit">Login</button>
            <div className="forgot-password">
                <p>Forgot Password,  <a href="www.google.com">Reset Now</a></p>
            </div>
        </div>

    </div>
  )
}
export default Login;