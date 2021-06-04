import React from 'react';
import './menu.scss'

const Menu = () => {
    return (
        <div className='mainMenu'>
            <ul className='menuDisplay'>
                <li className='menuItem'> Start </li>
                <li className='menuItem'> O co chodzi? </li>
                <li className='menuItem'> Fundacja i organizacje </li>
                <li className='menuItem'> Kontakt </li>
            </ul>
        </div>
    );
};

export default Menu;