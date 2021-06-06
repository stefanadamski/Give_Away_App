import React from 'react';
import { useHistory } from "react-router-dom";
import 'afterLogout.scss'

const AfterLogout = () => {
    let history = useHistory();
    const handleGoBack = () => {
        history.push('/');
    }
    return (
        <div>
            <h1> Wylogowanie nastąpiło pomyślnie </h1>
            <div className='decoration'> </div>
            <button className='giveAwayButton' onClick={handleGoBack}> Strona główna </button>
        </div>
    );
};

export default AfterLogout;