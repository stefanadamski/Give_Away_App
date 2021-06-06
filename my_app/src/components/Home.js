import React from 'react';
import './home.scss'
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import Contact from "./Contact/Contact";
import AboutUs from "./AboutUs/AboutUs";
import Header from "./Hearder/Header";
import EasySteps from "./EasySteps/EasySteps";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Help from "./Help/Help";
import { Link } from 'react-scroll'


function Home() {
    return (
        <div>
            <Navigation/>
            <div className='mainMenu'>
                <ul className='menuDisplay'>
                    <Link className='menuItem' to="header" smooth={true} duration={1500}>
                        Start </Link>
                    <Link className='menuItem' to="easy" smooth={true} duration={1500}>
                        O co chodzi? </Link>
                    <Link className='menuItem' to="about" smooth={true} duration={1500}>
                        O nas </Link>
                    <Link className='menuItem' to="help" smooth={true} duration={1500}>
                        Fundacja i organizacje </Link>
                    <Link className='menuItem' to="contact" smooth={true} duration={1500}>
                        Kontakt </Link>
                </ul>
            </div>
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <Help/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;
