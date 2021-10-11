import React from 'react';
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import Contact from "./Contact/Contact";
import AboutUs from "./AboutUs/AboutUs";
import Header from "./Header/Header";
import EasySteps from "./EasySteps/EasySteps";
import Navigation from "./Navigation/Navigation";
import Help from "./Help/Help";
import './Menu/menu.scss';
import { Link } from 'react-scroll'

function Home() {
    return (
        <div>
            <Navigation/>
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
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <Help/>
            <Contact/>
        </div>
    );
}

export default Home;
