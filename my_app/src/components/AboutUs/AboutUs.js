import React from 'react';
import './AboutUs.scss';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='aboutContainer'>
            <div className="aboutLeft">
                <h1 className='aboutTitle'> O nas </h1>
                <div className='aboutDecoration'> </div>
                <div className='aboutDescription'> Nori grape silver beet broccoli kombu beet greens
                    fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek
                    lentil turnip greens parsnip. </div>
                <div className='aboutSign'> </div>
                <Link to="/login"> Login </Link>
            </div>
            <div className="aboutRight"> </div>
        </div>
    );
};

export default AboutUs;