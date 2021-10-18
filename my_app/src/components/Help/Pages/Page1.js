import React, {useState} from 'react';
import '../help.scss'
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
            <div>
                {foundationPage === 1 && (<PagesTemplate title='Fundacja Krakowska'
                                                         description='Lorem ipsum dolor sit amet'
                                                         elements='Consectetur adipisc Pellentesque'
                                                                                                    />)}
                {foundationPage === 2 && (<PagesTemplate title='Fundacja Warszawska'
                                                         description='Lorem ipsum dolor sit amet'
                                                         elements='Consectetur adipisc Pellentesque'/>)}
                {foundationPage === 3 && (<PagesTemplate title='Fundacja Wrocławska'
                                                         description='Lorem ipsum dolor sit amet'
                                                         elements='Consectetur adipisc Pellentesque'/>)}
            </div>
            <div>
                <button onClick={handleFirstPage} className='the_other_button'> 1 </button>
                <button onClick={handleSecondPage} className='the_other_button'> 2 </button>
                <button onClick={handleThirdPage} className='the_other_button'> 3 </button>
            </div>
        </>
    );
};

export default Page1;
