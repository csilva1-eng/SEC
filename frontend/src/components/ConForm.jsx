import React, {useState} from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import toast, { Toaster } from 'react-hot-toast';
import api from "../../api";

function ConForm(){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
            api.post('/api/contact', {name, email, message});
            
            setEmail("")
            setName("")
            setMessage("")
            toast.success("Message sent!")

        } catch(error){
            console.error("Error submitting form:", error);
            toast.error("Failed to send message");
        }
    }

    return(
        <>
        <ScrollToTopButton/>
        <section className="page-shell">
            <div className="page-card">
                <div className="contact-header">
                    <p className="contact-tag">Contact</p>
                    <h1>Send a message</h1>
                    <p className="contact-description">Let's connect!</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                    />

                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name ex. John Doe"
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message..."
                        required
                    />

                    <button type="submit">Send message</button>
                    <Toaster
                    toastOptions={{
                        success: {
                        style: {
                            background: 'green',
                            color: 'white'
                        },
                        },
                        error: {
                        style: {
                            background: 'red',
                            color: 'white'
                        },
                        },
                    }}
                    />
                </form>
            </div>
        </section>
        </>
    );
}

export default ConForm