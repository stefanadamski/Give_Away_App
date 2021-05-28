import React from 'react';

const Step2 = () => {
    const options = ["wybierz",1,2,3,4,5];
    return (
        <div>
            <span> Krok 2/4 </span>
            <h1> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h1>
            <div className="select-container">
                <select>
                    {options.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Step2;



