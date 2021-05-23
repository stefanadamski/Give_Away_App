import React from 'react';
import "../scss/Logout.scss";

const Logout = () => {
    const handleReturnToMainPage = () => {
        window.location.href = window.location.origin + "/home";
    }
    return (
        <div className='logout_container'>
            <h1> Wylogowanie nastąpiło pomyślnie! </h1>
            <div className='logout_decoration'/>
            <button onClick={handleReturnToMainPage}> Strona główna </button>
        </div>
    );
};

export default Logout;