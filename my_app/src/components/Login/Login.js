import React, {useState} from 'react';
import './login.scss';
import Menu from "../Menu/Menu";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginEmail.length < 5 || loginEmail.indexOf("@") === -1) {
            alert("Please enter a valid e-mail address");
            return false;
        }
        if (loginPassword.length < 6) {
            alert("Please enter at least 6 characters");
            return false;
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
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="inputStyle"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
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