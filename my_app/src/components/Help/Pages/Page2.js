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
            <div>
                {nonGovPage === 1 && (<PagesTemplate title='Organizacja w Krakowie'
                                                     description='Lorem ipsum dolor sit amet'
                                                     elements='Consectetur adipisc Pellentesque'/>)}
                {nonGovPage === 2 && (<PagesTemplate title='Organizacja w Warszawie'
                                                     description='Lorem ipsum dolor sit amet'
                                                     elements='Consectetur adipisc Pellentesque'/>)}
            </div>
            <div>
                <button className='the_other_button' onClick={handleFirstPage}> 1 </button>
                <button className='the_other_button' onClick={handleSecondPage}> 2 </button>
            </div>
        </>
    );
};

export default Page2;
