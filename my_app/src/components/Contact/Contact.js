import React, {useState} from 'react';
import "./contact.scss"

const Contact = () => {
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailAddress.length < 5 || emailAddress.indexOf("@") === -1) {
            alert("Wpisz poprawny adres e-mail!");
            return false;
        }
        if (name.length < 2) {
            alert("Twoje imię jest za krótkie!");
            return false;
        }
        if (message.length < 120) {
            alert("Napisz coś więcej!");
            return false;
        }
        else {
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
                            </div>
                            <div className='contactDetails'>
                                <label>Wpisz swój e-mail</label>
                                <input type="email"
                                       className="inputStyle"
                                       value={emailAddress}
                                       placeholder="krzysztof@nowak.com"
                                       onChange={(e) => setEmailAddress(e.target.value)}
                                />
                            </div>
                        </div>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            placeholder="Lorem ipsum dolor sit amet."
                            className="textareaStyle"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button className='giveAwayButton'> WYŚLIJ </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

