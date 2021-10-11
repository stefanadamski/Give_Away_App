import React, {useState} from 'react';
import "./contact.scss"
import Footer from "../Footer/Footer";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [confirmation, setConfirmation] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
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
            const data = {name, email, message}
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
        <div className='contact' id='contact'>
                <h1> Skontaktuj się z nami </h1>
                <div className='decoration'> </div>
                    {confirmation === true && (<>
                    <div className='green_confirmation'> Wiadomość została wysłana! Wkrótce się skontaktujemy! </div>
                    </>)}
                <div>
                    <form className="contact_form" onSubmit={(e) => handleSubmit(e)}>
                        <div className='contact_details'>
                            <label>Wpisz swoje imię</label>
                            <input type="text"
                                   className="input_style"
                                   value={name}
                                   placeholder="Stefan"
                                   onChange={(e) => setName(e.target.value)}
                            />
                            {nameError === true && (<div className='red_error'> Podane imię jest nieprawidłowe! </div>)}
                        </div>
                        <div className='contact_details'>
                            <label>Wpisz swój e-mail</label>
                            <input type="email"
                                   className="input_style"
                                   value={email}
                                   placeholder="krzysztof@nowak.com"
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError === true && (<> <div className='red_error'> Podany e-mail jest nieprawidłowy! </div> </>)}
                        </div>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            placeholder="Lorem ipsum dolor sit amet."
                            className="textarea_style"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {messageError === true && (<> <div className='red_error'>
                            Wiadomość musi mieć conajmniej 120 znaków!
                        </div> </>)}
                        <button className='give_away_button'> WYŚLIJ </button>
                    </form>
                </div>
            <Footer/>
        </div>
    );
};

export default Contact;
