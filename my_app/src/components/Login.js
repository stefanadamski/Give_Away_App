import React, {useState} from 'react';

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
            window.location.href = window.location.origin + "/home";
        }
    }
    return (
        <>
            <div className='loginContainer'>
                <div className='loginTitle'> Zaloguj się </div>
                <div className='loginDecoration'> </div>
                <div className="loginForm">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label>Email</label>
                        <input type="email"
                               className="inputStyle"
                               value={loginEmail}
                               placeholder="john@login.com"
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
                        <button className="loginButton"> Register </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;