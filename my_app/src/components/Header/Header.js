import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
        <div className='container'>
            <div className='header_container'>
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
    );
};

export default Header;

/*
<div className='header_container' id='header'>
            <div className='startHelping'>

            </div>
        </div>

        <div className='container'>
            <div className='header_container'>
                <div className='header_left'>

                </div>
                <div className='header_right'>

                </div>
            </div>
        </div>
 */
