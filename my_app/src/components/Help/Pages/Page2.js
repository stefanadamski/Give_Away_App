import React, {useState} from 'react';
import '../help.scss'
import PagesTemplate from "./PagesTemplate";

const Page2 = () => {
    const [nonGovPage, setNonGovPage] = useState(1);
    const handleFirstPage = () => {
        setNonGovPage(1);
    }
    const handleSecondPage = () => {
        setNonGovPage(2);
    }
    return (<>
            <div className='formSteps'>
                {nonGovPage === 1 && (<PagesTemplate title='Organizacje' description='description' elements='elements'/>)}
                {nonGovPage === 2 && (<PagesTemplate title='Organizacje2' description='description' elements='elements'/>)}
            </div>
            <div>
                <button onClick={handleFirstPage}> 1 </button>
                <button onClick={handleSecondPage}> 2 </button>
            </div>
        </>
    );
};

export default Page2;