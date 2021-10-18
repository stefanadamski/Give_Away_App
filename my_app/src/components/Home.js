import React from 'react';
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import Contact from "./Contact/Contact";
import AboutUs from "./AboutUs/AboutUs";
import Header from "./Header/Header";
import EasySteps from "./EasySteps/EasySteps";
import Help from "./Help/Help";
import Footer from "./Footer/Footer";
import './Menu/menu.scss';

function Home() {
    return (
        <div>
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
