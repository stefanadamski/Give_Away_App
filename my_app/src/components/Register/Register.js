import React, {useState} from "react";
import './register.scss';
import Menu from "../Menu/Menu";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerEmailError, setRegisterEmailError] = useState(false);
    const [registerPassError, setRegisterPassError] = useState(false);
    const [registerConfirmError, setRegisterConfirmError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 5 || email.indexOf("@") === -1) {
            setRegisterEmailError(true);
        }
        if (password.length < 6) {
            setRegisterPassError(true);
        }
        if (password !== confirmPassword) {
            setRegisterConfirmError(true);
        }
        else {
            window.location.href = window.location.origin + "/login";
        }
    }
    return (
        <>
            <Menu/>
            <div className='registerContainer'>
                <h1> Zarejestruj się </h1>
                <div className='decoration'> </div>
                <div className="registerForm">
                    <form className="registerInputs" onSubmit={(e) => handleSubmit(e)}>
                        <label>E-mail</label>
                        <input type="email"
                               className="inputStyle"
                               value={email}
                               placeholder="piotr@login.com"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        {registerEmailError === true && (<> <div className='redError'> Podany e-mail jest nieprawidłowy! </div> </>)}
                        <label>Hasło</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="inputStyle"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {registerPassError === true && (<> <div className='redError'> Podane hasłojest za krótkie! </div> </>)}
                        <label>Potwierdź hasło</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="inputStyle"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {registerConfirmError === true && (<> <div className='redError'> Podane hasła są różne! </div> </>)}
                        <div className='registerButtons'>
                            <button className="loginButton"> Zaloguj się </button>
                            <button className="registerButton" onClick={handleSubmit}> Załóż konto </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;

