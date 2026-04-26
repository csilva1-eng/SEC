import React, {useState, useEffect} from "react";

function ConForm(){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
    }

    
    return(
    <form onSubmit = {handleSubmit}>
        <label>Email</label>
        <input type = "email" value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        required/>

        <label>Name</label>
        <input type = "text" value = {name}
        onChange = {(e) => setName(e.target.value)}
        required/>

        <label>Message</label>
        <textarea value = {message}
        onChange = {(e) => setMessage(e.target.value)}
        required/>

        <button type = "submit">Send</button>
    </form>
    );
}

export default ConForm