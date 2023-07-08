import React, { useState } from 'react';
import '../App.css';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);

    const onSubmitSignIn = (event) => {
        event.preventDefault(); // prevent form from submitting
        fetch('https://moyalron-backend.onrender.com/contact', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        
        .then(response => response.json())
        .then(data => {
            if(data === 'the message was sent successfully!') {
                setAlertVisible(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Something went wrong, please try again');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="contact-form">
            {alertVisible && 
                <div className="alert">Your message has been sent successfully!</div>
            }
            <h2>Contact Me !</h2>
            <form onSubmit={onSubmitSignIn}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full-Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactMe;
