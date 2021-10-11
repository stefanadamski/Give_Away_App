import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerEmailError, setRegisterEmailError] = useState(false);
    const [registerPassError, setRegisterPassError] = useState(false);
    const [registerConfirmError, setRegisterConfirmError] = useState(false);
    let history = useHistory();

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
            history.push('/login');
        }
    }
    return (
        <div className='container'>
            <Navigation/>
            <div className='login_container'>
                <h1> Zarejestruj się </h1>
                <div className='decoration'> </div>
                <div className="login_form">
                    <form className="login_inputs" onSubmit={(e) => handleSubmit(e)}>
                        <label>E-mail</label>
                        <input type="email"
                               className="input_style"
                               value={email}
                               placeholder="piotr@login.com"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        {registerEmailError === true && (<> <div className='red_error'> Podany e-mail jest nieprawidłowy! </div> </>)}
                        <label>Hasło</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="input_style"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {registerPassError === true && (<> <div className='red_error'> Podane hasłojest za krótkie! </div> </>)}
                        <label>Potwierdź hasło</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="input_style"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {registerConfirmError === true && (<> <div className='red_error'> Podane hasła są różne! </div> </>)}
                        <div className='login_buttons'>
                            <button className="give_away_button" onClick={handleSubmit}> Załóż konto </button>
                            <button className="the_other_button"> Zaloguj się </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;

