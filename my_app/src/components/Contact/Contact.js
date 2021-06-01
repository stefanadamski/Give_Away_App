import React, {useState} from 'react';
import "./contact.scss"

const Contact = () => {
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
    const [confirmation, setConfirmation] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(emailAddress)) {
            setEmailError(true);
        }
        if (name.length < 2) {
            setNameError(true);
        }
        if (message.length < 120) {
            setMessageError(true);
        }
        else {
            setConfirmation(true);
            setMessageError(false);
            setNameError(false);
            setEmailError(false);
            const data = {name, emailAddress, message}
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setConfirmation(true);

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }
    return (
        <div className='contact'>
            <div className='contactDiv'>
                <h1> Skontaktuj się z nami </h1>
                <div className='decoration'> </div>
                {confirmation === true && (<>
                    <div className='greenConfirmation'> Wiadomość została wysłana! Wkrótce się skontaktujemy! </div>
                    </>)}
                <div>
                    <form className="contactForm" onSubmit={(e) => handleSubmit(e)}>
                        <div className='firstRowContact'>
                            <div className='contactDetails'>
                                <label>Wpisz swoje imię</label>
                                <input type="text"
                                       className="inputStyle"
                                       value={name}
                                       placeholder="Stefan"
                                       onChange={(e) => setName(e.target.value)}
                                />
                                {nameError === true && (<div className='redError'> Podane imię jest nieprawidłowe! </div>)}
                            </div>
                            <div className='contactDetails'>
                                <label>Wpisz swój e-mail</label>
                                <input type="email"
                                       className="inputStyle"
                                       value={emailAddress}
                                       placeholder="krzysztof@nowak.com"
                                       onChange={(e) => setEmailAddress(e.target.value)}
                                />
                                {emailError === true && (<> <div className='redError'> Podany e-mail jest nieprawidłowy! </div> </>)}
                            </div>
                        </div>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            placeholder="Lorem ipsum dolor sit amet."
                            className="textareaStyle"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {messageError === true && (<> <div className='redError'> Wiadomość musi mieć conajmniej 120 znaków! </div> </>)}
                        <button className='giveAwayButton'> WYŚLIJ </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

