import React, {useState} from 'react';
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import './help.scss'

const Help = () => {
    const [page, setPage] = useState(1);
    const handleFoundations = () => {
        setPage(1);
    }
    const handleOrganizations = () => {
        setPage(2);
    }
    const handleLocal = () => {
        setPage(3);
    }
    return (
        <div className='paginatorContainer' id='help'>
            <div className='paginatorOptions'>
                <button className='giveAwayButton' onClick={handleFoundations}> Fundacjom </button>
                <button className='giveAwayButton' onClick={handleOrganizations}> Organizacjom pozarządowym </button>
                <button className='giveAwayButton' onClick={handleLocal}> Lokalnym zbiórkom </button>
            </div>
            <div className='description'> W naszej bazie znajdziesz listę zweryfikowanych
                Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
                pomagają i czego potrzebują.</div>
            <div className='decoration'> </div>
            <div className='formSteps'>
                {page === 1 && (<Page1/>)}
                {page === 2 && (<Page2/>)}
                {page === 3 && (<Page3/>)}
            </div>
        </div>
    );
};

export default Help;


