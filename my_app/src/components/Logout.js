import React from 'react';
import "../scss/Logout.scss";

const Logout = () => {
    const handleReturnToMainPage = () => {
        window.location.href = window.location.origin + "/home";
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