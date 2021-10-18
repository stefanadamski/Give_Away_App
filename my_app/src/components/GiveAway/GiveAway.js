import React from 'react';
import Contact from "../Contact/Contact";
import GiveAwayHeader from "./GiveAwayHeader";
import './give_away.scss'
import FullForm from "../GiveAwayForm/FullForm";
import showResults from "../GiveAwayForm/showResults";

const GiveAway = () => {
    return (
        <div>
            <GiveAwayHeader/>
            <FullForm onSubmit={showResults} />
            <Contact/>
        </div>
    );
};

export default GiveAway;
