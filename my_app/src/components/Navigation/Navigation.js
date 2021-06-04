import React from 'react';
import './navigation.scss'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='naviContainer'>
            <div className='loginRegister'>
                <Link to="/login" style={{ textDecoration: 'none', fontSize: '25px' }}> Zaloguj się </Link>
                <Link to="/register" style={{ textDecoration: 'none', fontSize: '25px'  }}> Zarejestruj się </Link>
            </div>
        </div>
    );
};

export default Navigation;