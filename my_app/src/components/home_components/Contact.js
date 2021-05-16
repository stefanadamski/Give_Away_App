import React, {useState} from 'react';

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
        if (message.length < 5) {
            alert("Napisz coś więcej!");
            return false;
        }
        else {
            window.location.href = window.location.origin + "/login";
            sessionStorage.setItem('emailAddress', emailAddress.value);
            sessionStorage.setItem('name', name.value);
        }
    }
    return (
        <div>
            <h1> Skontaktuj się z nami </h1>
            <div className="contact_form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Wpisz swoje imię</label>
                    <input type="text"
                           className="inputStyle"
                           value={name}
                           placeholder="Stefan"
                           onChange={(e) => setName(e.target.value)}
                    />
                    <label>Wpisz swój e-mail</label>
                    <input type="email"
                           className="inputStyle"
                           value={emailAddress}
                           placeholder="krzysztof@kowalski.com"
                           onChange={(e) => setEmailAddress(e.target.value)}
                    />
                    <label>Wpisz swoją wiadomość</label>
                    <input
                        type="password"
                        placeholder="Lorem ipsum dolor sit amet."
                        className="inputStyle"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;