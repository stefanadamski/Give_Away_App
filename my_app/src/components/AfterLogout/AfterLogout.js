import React from 'react';
import 'afterLogout.scss'

const AfterLogout = () => {
    return (
        <div>
            <h1> Wylogowanie nastąpiło pomyślnie </h1>
            <div className='decoration'> </div>
            <button className='giveAwayButton'> Strona główna </button>
        </div>
    );
};

export default AfterLogout;