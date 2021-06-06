import React, {useState} from 'react';
import '../pagination.scss'
import PagesTemplate from "./PagesTemplate";

const Page1 = () => {
    const [foundationPage, setFoundationPage] = useState(1);
    const handleFirstPage = () => {
        setFoundationPage(1);
    }
    const handleSecondPage = () => {
        setFoundationPage(2);
    }
    const handleThirdPage = () => {
        setFoundationPage(3);
    }
    return (<>
            <div className='formSteps'>
                {foundationPage === 1 && (<PagesTemplate title='Fundacje' description='description' elements='elements'/>)}
                {foundationPage === 2 && (<PagesTemplate title='Fundacje2' description='description' elements='elements'/>)}
                {foundationPage === 3 && (<PagesTemplate title='Fundacje3' description='description' elements='elements'/>)}
            </div>
            <div>
                <button onClick={handleFirstPage}> 1 </button>
                <button onClick={handleSecondPage}> 2 </button>
                <button onClick={handleThirdPage}> 3 </button>
            </div>
        </>
    );
};

export default Page1;