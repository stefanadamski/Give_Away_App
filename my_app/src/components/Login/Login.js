import React, {useState} from 'react';
import './login.scss';
import Menu from "../Menu/Menu";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginEmailError, setLoginEmailError] = useState(false);
    const [loginPasswordError, setLoginPasswordError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginEmail.length < 5 || loginEmail.indexOf("@") === -1) {
            setLoginEmailError(true);
        }
        if (loginPassword.length < 6) {
            setLoginPasswordError(true);
        }
        else {
            window.location.href = window.location.origin + "/";
        }
    }
    const redirectToRegister = (e) => {
        e.preventDefault();
        window.location.href = window.location.origin + "/register";
    }
    return (
        <>
            <Menu/>
            <div className='loginContainer'>
                <h1> Zaloguj się </h1>
                <div className='decoration'> </div>
                <div className="loginForm">
                    <form className="loginInputs" onSubmit={(e) => handleSubmit(e)}>
                        <label>Email</label>
                        <input type="email"
                               className="inputStyle"
                               value={loginEmail}
                               placeholder="piotr@login.com"
                               onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        {loginEmailError === true && (<> <div className='redError'> Podany e-mail jest nieprawidłowy! </div> </>)}
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="inputStyle"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        {loginPasswordError === true && (<> <div className='redError'> Podane hasło jest za krótkie! </div> </>)}
                        <div className='loginButtons'>
                            <button className="registerButton" onClick={redirectToRegister}> Załóż konto </button>
                            <button className="loginButton"> Zaloguj się </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;