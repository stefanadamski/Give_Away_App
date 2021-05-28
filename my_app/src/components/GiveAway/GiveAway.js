import React, {useState} from 'react';
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Summary from "../Steps/Summary";
import ThankYou from "../Steps/ThankYou";
import './GiveAway.scss';

const GiveAway = () => {
    const [formStep, setFormStep] = useState(1);

    const completeFormStep = () => {
        setFormStep(prev => prev + 1);
    }
    const goToPreviousStep = () => {
        setFormStep(prev => prev - 1);
    }
    return (
        <div>
            <div className='formSteps'>
                {formStep === 1 && (<Step1/>)}
                {formStep === 2 && (<Step2/>)}
                {formStep === 3 && (<Step3/>)}
                {formStep === 4 && (<Step4/>)}
                {formStep === 5 && (<Summary/>)}
                {formStep === 6 && (<ThankYou/>)}
            </div>
            <div>
                {formStep > 1 &&
                (<button className='stepButton' onClick={goToPreviousStep}> Wstecz </button>)}
                {formStep < 5 &&
                (<button className='stepButton' onClick={completeFormStep}> Dalej </button>)}
                {formStep === 5 &&
                (<button className='stepButton' onClick={completeFormStep}> Potwierdzam </button>)}
            </div>
        </div>
    );
};

export default GiveAway;