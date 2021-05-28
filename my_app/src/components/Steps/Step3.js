import React from 'react';

const Step3 = () => {
    const cities = ["Poznań", "Kraków", "Warszawa", "Wrocław", "Katowice"];
    const receivers = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"];
    return (
        <div>
            <span> Krok 2/4 </span>
            <h1> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h1>
            <div className="selectContainer">
                <select>
                    {cities.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <form className="receiversForm">
                {receivers.map(
                    (el,i) => <><input type="radio" value={el} name="option"/>{el}</>
                )
                }
            </form>
            <input type='text'/>
        </div>
    );
}

export default Step3;