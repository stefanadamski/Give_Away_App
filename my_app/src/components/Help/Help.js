import React, {useState} from 'react';
import HelpStep1 from "./HelpStep1";
import HelpStep2 from "./HelpStep2";
import HelpStep3 from "./HelpStep3";
import './Help.scss';

const Help = () => {
    const [helpStep, setHelpStep] = useState(1);

    const completeFormStep = () => {
        setHelpStep(prev => prev + 1);
    }
    return (
        <div>
            <div className='formSteps'>
                {helpStep === 1 && (<HelpStep1/>)}
                {helpStep === 2 && (<HelpStep2/>)}
                {helpStep === 3 && (<HelpStep3/>)}
            </div>
            <button onClick={completeFormStep}> Dalej </button>
        </div>
    );
};

export default Help;