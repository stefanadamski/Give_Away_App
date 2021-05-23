import React, {useState} from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 5 || email.indexOf("@") === -1) {
            alert("Please enter a valid e-mail address");
            return false;
        }
        if (password.length < 6) {
            alert("Please enter at least 6 characters");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords are different");
            return false;
        }
        else {
            window.location.href = window.location.origin + "/login";
        }
    }
    return (
        <>
            <div className='registerContainer'>
                <div className="registerForm">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label>Email</label>
                        <input type="email"
                               className="inputStyle"
                               value={email}
                               placeholder="john@register.com"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="inputStyle"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Confirm Password</label>
                        <input
                            type="confirm_password"
                            placeholder="**********"
                            className="inputStyle"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className="registerButton"> Register </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;