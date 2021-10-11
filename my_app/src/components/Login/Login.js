import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import './login.scss';
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginEmailError, setLoginEmailError] = useState(false);
    const [loginPasswordError, setLoginPasswordError] = useState(false);
    const dispatch = useDispatch();
    let history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginEmail.length < 5 || loginEmail.indexOf("@") === -1) {
            setLoginEmailError(true);
        }
        if (loginPassword.length < 6) {
            setLoginPasswordError(true);
        }
        else {
            dispatch(authActions.login());
            history.push('/');
        }
    }
    const redirectToRegister = (e) => {
        e.preventDefault();
        history.push('/register')
    }
    return (
        <div className='container'>
            <Navigation/>
            <div className='login_container'>
                <h1> Zaloguj się </h1>
                <div className='decoration'> </div>
                <div className="login_form">
                    <form className="login_inputs" onSubmit={(e) => handleLogin(e)}>
                        <label>Email</label>
                        <input type="email"
                               className="input_style"
                               value={loginEmail}
                               placeholder="piotr@login.com"
                               onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        {loginEmailError === true && (<> <div className='red_error'> Podany e-mail jest nieprawidłowy! </div> </>)}
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="input_style"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        {loginPasswordError === true && (<> <div className='redError'> Podane hasło jest za krótkie! </div> </>)}
                        <div className='login_buttons'>
                            <button className="give_away_button"> Zaloguj się </button>
                            <button className="the_other_button" onClick={redirectToRegister}> Załóż konto </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;



