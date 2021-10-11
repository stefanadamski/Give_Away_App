import React from 'react';
import './navigation.scss'
import {Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const Navigation = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    let history = useHistory();

    const handleLogout = (event) => {
        event.preventDefault();
        dispatch(authActions.logout());
        history.push('/logout')
    }
    return (
        <div className='navi_container'>
            <div className='login_register'>
                {isAuth && <div className='login_link' onClick={handleLogout}> Wyloguj się </div>}
                {!isAuth && <Link to="/login" className='login_link'> Zaloguj się </Link>}
                <Link to="/register" className='login_link'> Zarejestruj się </Link>
            </div>
        </div>
    );
};

export default Navigation;

