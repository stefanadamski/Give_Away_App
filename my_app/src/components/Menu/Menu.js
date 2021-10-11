import React from 'react';
import {Link} from "react-scroll";
import './menu.scss';

const Menu = () => {
    return (
        <div>
            <div className='main_menu'>
                <ul className='menu_display'>
                    <Link className='menu_item' to="header" smooth={true} duration={1500}>
                        Start </Link>
                    <Link className='menu_item' to="easy" smooth={true} duration={1500}>
                        O co chodzi? </Link>
                    <Link className='menu_item' to="about" smooth={true} duration={1500}>
                        O nas </Link>
                    <Link className='menu_item' to="help" smooth={true} duration={1500}>
                        Fundacja i organizacje </Link>
                    <Link className='menu_item' to="contact" smooth={true} duration={1500}>
                        Kontakt </Link>
                </ul>
            </div>

        </div>
    );
};

export default Menu;
