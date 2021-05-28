import React, {useState} from "react";
import './Steps.scss'

const Step1 = () => {
    const [options, setOptions] = useState(["ubrania do ponownego użycia",
        "ubrania do wyrzucenia", "zabawki", "książki", "inne"]);
    return (
        <div>
            <span> Krok 1/4 </span>
            <h1> Zaznacz co chcesz oddać:</h1>
            <form className="checkboxForm">
                    {options.map(
                            (el,i) => <><input type="radio" value={el} name="option"/> {el}</>
                        )
                    }
            </form>
        </div>
    );
}

export default Step1;