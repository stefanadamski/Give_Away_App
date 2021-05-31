import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='headerLeft'> </div>
            <div className='startHelping'>
                <h1> Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w zaufane ręce </h1>
                <div className='decoration'> </div>
                <div className='headerButtons'>
                    <button className='giveAwayButton'>
                        <Link to="/login"
                              style={{ textDecoration: 'none', color: '#3C3C3C' }}
                        > ODDAJ RZECZY </Link>
                    </button>
                    <button className='giveAwayButton'>
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