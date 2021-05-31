import React, {useState} from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
import './allSteps.scss';

const AllSteps = () => {
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

export default AllSteps;