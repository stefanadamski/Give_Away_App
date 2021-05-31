import React, {useState} from 'react';
import HelpStep1 from "./HelpStep1";
import HelpStep2 from "./HelpStep2";
import HelpStep3 from "./HelpStep3";
import './help.scss';

const Help = () => {
    const [helpStep, setHelpStep] = useState(1);

    const handleHelp = () => {
        setHelpStep(prev => prev + 1);
    }
    return (
        <div>
            <div> Komu pomagamy?</div>
            <div className='decoration'> </div>
            <button onClick={handleHelp}> Fundacjom </button>
            <button onClick={handleHelp}> Organizacjom pozarządowym </button>
            <button onClick={handleHelp}> Lokalnym zbiórkom </button>
            <div className='helpDescription'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
            <div className='helpSteps'>
                {helpStep === 1 && (<HelpStep1/>)}
                {helpStep === 2 && (<HelpStep2/>)}
                {helpStep === 3 && (<HelpStep3/>)}
            </div>
        </div>
    );
};

export default Help;