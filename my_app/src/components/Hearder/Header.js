import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='headerLeft'> </div>
            <div className='startHelping'>
                <h1> Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w zaufane ręce </h1>
                <div className='decorationHeader'> </div>
                <Link to="/login" className='giveAwayButton' style={{ textDecoration: 'none' }}> ODDAJ RZECZY </Link>
                <Link to="/giveaway" className='giveAwayButton' style={{ textDecoration: 'none' }}> ZORGANIZUJ ZBIÓRKĘ </Link>
            </div>
        </div>
    );
};

export default Header;