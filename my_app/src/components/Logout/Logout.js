import React from 'react';
import { useHistory } from "react-router-dom";
import "./logout.scss";

const Logout = () => {
    let history = useHistory();
    const handleReturnToMainPage = () => {
        history.push('/home');
    }
    return (
        <div className='logoutContainer'>
            <h1> Wylogowanie nastąpiło pomyślnie! </h1>
            <div className='logoutDecoration'/>
            <button onClick={handleReturnToMainPage}> Strona główna </button>
        </div>
    );
};

export default Logout;