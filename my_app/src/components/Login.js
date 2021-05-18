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
            sessionStorage.setItem('email', loginEmail.value);
            sessionStorage.setItem('password', loginPassword.value);
        }
    }
    return (
        <>
            <div className='login_container'>
                <div className='login_title'> Zaloguj się </div>
                <div className='login_decoration'> </div>
                <div className="login_form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label>Email</label>
                        <input type="email"
                               className="input_style"
                               value={loginEmail}
                               placeholder="john@login.com"
                               onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="input_style"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <button className="login_button"> Register </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;