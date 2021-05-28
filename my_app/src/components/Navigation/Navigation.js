import React from 'react';
import './Navigation.scss'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='naviContainer'>
            <div className='loginRegister'>
                <Link to="/login" style={{ textDecoration: 'none' }}> Zaloguj się </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}> Zarejestruj się </Link>
            </div>
        </div>
    );
};

export default Navigation;