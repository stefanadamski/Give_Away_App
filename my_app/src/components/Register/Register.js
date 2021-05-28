import React, {useState} from "react";
import './Register.scss';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 5 || email.indexOf("@") === -1) {
            alert("Wpisz poprawny adres e-mail");
            return false;
        }
        if (password.length < 6) {
            alert("Wpisz conajmniej 6 znaków");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Hasła nie są jednakowe");
            return false;
        }
        else {
            window.location.href = window.location.origin + "/login";
        }
    }
    return (
        <>
            <div className='registerContainer'>
                <div className='registerTitle'> Zarejestruj się </div>
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
                        <label>Hasło</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="inputStyle"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Potwierdź hasło</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="inputStyle"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
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

