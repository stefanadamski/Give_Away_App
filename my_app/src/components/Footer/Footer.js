import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div> &copy; Stefan Adamski </div>
            <div className='socialMedia'>
                <div className='facebook'> </div>
                <div className='instagram'> </div>
            </div>
        </div>
    );
};

export default Footer;