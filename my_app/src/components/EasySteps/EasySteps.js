import React from 'react';
import './EasySteps.scss';
import {Link} from "react-router-dom";

const EasySteps = () => {
    return (
        <div className="stepsContainer">
            <h1 className='stepsTitle'> Wystarczą 4 proste kroki </h1>
            <div className='stepsDecoration'> </div>
            <div className='stepsElements'>
                <div className='boxElement'>
                    <div className='boxIcon boxIcon1'> </div>
                    <h1> Wybierz rzeczy </h1>
                    <div className='boxLine'> </div>
                    <p> ubrania, zabawki, sprzęt i inne </p>
                </div>
                <div className='boxElement'>
                    <div className='boxIcon boxIcon2'> </div>
                    <h1> Spakuj je </h1>
                    <div className='boxLine'> </div>
                    <p> skorzystaj z worków na śmieci </p>
                </div>
                <div className='boxElement'>
                    <div className='boxIcon boxIcon3'> </div>
                    <h1> Zdecyduj komu pomóc </h1>
                    <div className='boxLine'> </div>
                    <p> wybierz zaufane miejsce </p>
                </div>
                <div className='boxElement'>
                    <div className='boxIcon boxIcon4'> </div>
                    <h1> Zamów kuriera </h1>
                    <div className='boxLine'> </div>
                    <p> kurier przyjedzie w dogodnym terminie </p>
                </div>
            </div>
            <button className='giveAwayButton'>
                <Link to="/giveaway" style={{ textDecoration: 'none', color: '#3C3C3C' }}> ODDAJ RZECZY </Link>
            </button>
        </div>
    );
};

export default EasySteps;