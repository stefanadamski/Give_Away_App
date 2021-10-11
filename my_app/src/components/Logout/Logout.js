import React from 'react';
import { useHistory } from "react-router-dom";
import "./logout.scss";

const Logout = () => {
    let history = useHistory();
    const handleReturnToMainPage = () => {
        history.push('/');
    }
    return (
        <div className='logout_container'>
            <div className='decoration'> </div>
            <h1> Wylogowanie nastąpiło pomyślnie! </h1>
            <div className='logout_decoration'/>
            <button onClick={handleReturnToMainPage}> Strona główna </button>
        </div>
    );
};

export default Logout;
