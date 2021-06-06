import React from 'react';
import './navigation.scss'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='naviContainer'>
            <div className='loginRegister'>
                <Link to="/login" className='loginLink'> Zaloguj się </Link>
                <Link to="/register" className='loginLink'> Zarejestruj się </Link>
            </div>
        </div>
    );
};

export default Navigation;