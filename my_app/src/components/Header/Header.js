import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss'
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

const Header = () => {
    return (
        <div className='container' id='header'>
            <div className='main_header_container'>
                <Navigation/>
                <Menu/>
                <div className='header_container'>
                    <div className='header_content'>
                        <h1> Zacznij pomagać!<br/>
                            Oddaj niechciane rzeczy w zaufane ręce </h1>
                        <div className='decoration'> </div>
                        <div className='header_buttons'>
                            <button className='give_away_button'>
                                <Link to="/login"
                                      style={{ textDecoration: 'none', color: '#3C3C3C' }}
                                > ODDAJ RZECZY </Link>
                            </button>
                            <button className='give_away_button'>
                                <Link to="/giveaway"
                                      style={{ textDecoration: 'none', color: '#3C3C3C' }}
                                >ZORGANIZUJ ZBIÓRKĘ </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

