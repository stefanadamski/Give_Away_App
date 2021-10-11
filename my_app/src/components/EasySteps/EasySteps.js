import React from 'react';
import './easySteps.scss';
import {Link} from "react-router-dom";

const EasySteps = () => {
    return (
        <div className="steps_container" id='easy'>
            <h1 className='steps_title'> Wystarczą 4 proste kroki </h1>
            <div className='decoration'> </div>
            <div className='all_steps'>
                    <div className='box_element'>
                        <div className='box_icon box_icon1'> </div>
                        <h1> Wybierz rzeczy </h1>
                        <div className='box_line'> </div>
                        <p> ubrania, zabawki, sprzęt i inne </p>
                    </div>
                    <div className='box_element'>
                        <div className='box_icon box_icon2'> </div>
                        <h1> Spakuj je </h1>
                        <div className='box_line'> </div>
                        <p> skorzystaj z worków na śmieci </p>
                    </div>
                    <div className='box_element'>
                        <div className='box_icon box_icon3'> </div>
                        <h1> Zdecyduj komu pomóc </h1>
                        <div className='box_line'> </div>
                        <p> wybierz zaufane miejsce </p>
                    </div>
                    <div className='box_element'>
                        <div className='box_icon box_icon4'> </div>
                        <h1> Zamów kuriera </h1>
                        <div className='box_line'> </div>
                        <p> kurier przyjedzie w dogodnym terminie </p>
                    </div>
            </div>
            <button className='give_away_button'>
                <Link to="/giveaway" style={{ textDecoration: 'none', color: '#3C3C3C' }}> ODDAJ RZECZY </Link>
            </button>
        </div>
    );
};

export default EasySteps;
