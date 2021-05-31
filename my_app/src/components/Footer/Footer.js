import React from 'react';
import './footer.scss';

const Footer = () => {
    const handleFacebook = () => {

    }
    const handleInstagram = () => {

    }
    return (
        <div className='footerContainer'>
            <div> &copy; Stefan Adamski </div>
            <div className='socialMedia'>
                <div className='facebook' onClick={handleFacebook}> </div>
                <div className='instagram' onClick={handleInstagram}> </div>
            </div>
        </div>
    );
};

export default Footer;