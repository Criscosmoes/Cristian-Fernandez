import React from 'react'
import styled from 'styled-components'; 
import "aos/dist/aos.css";




import emailjs from 'emailjs-com'; 


const StyledContactForm = styled.div`

& {
    background: white;
}

.container {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 

}

.container > * {
    margin: 1.5%
}



// lets talk section 

.lets-talk > * {
    margin: 1%;
}


.lets-talk {
    text-align: center; 
    width: 40%; 

}

h2 {
    font-size: 7rem; 
}

p {
    font-size: 2.5rem; 
}

form {

    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 50%
}

form > * {
    margin: 2%
}

.input > * {
    margin: 1%
}

.input {
    display: flex;
    flex-direction: column; 
    width: 100%
}



.contact {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center;  
    width: 60%; 
}

.information {
    height: 550px; 
    width: 30%
}

.information > * {
    margin: 7%; 
}

h4 {
    font-size: 2.5rem; 
}

.details {
    font-size: 2rem; 
}

label {
    font-size: 3rem; 
}

input {
    border: none; 
    border-bottom: 2px solid gray; 
    outline: none; 
    font-size: 2rem; 
}

.text-area {
    border: none; 
    outline: none; 
    border-bottom: 1px solid gray; 
    background: transparent;
    resize: none;  
    font-size: 2rem;
}


.normal {
    height: 60px; 
}

button {
    padding: 2%;
    width: 50%
}
`


const ContactForm = () => {


    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_4652yqq', 'template_3nynart', e.target, 'user_Xhy2HCeGOm75iioB77ysW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset(); 
    }

    




    return (
        <StyledContactForm id="Contact">
            <div className="container">
                <div className="lets-talk">
                    <h2>Let's Talk.</h2>
                    <p>Whether it's work related or just a chat, send me an email!</p>
                </div>

                <div className="contact">
                    <form onSubmit={sendEmail}>

                        <div className="input">
                            
                            <input className="normal" type="text" name="name" placeholder="name" />
                        </div>

                        <div className="input">
                            
                            <input className="normal" type="text" name="email" placeholder="email" />
                        </div>

                        <div className="input">
                            
                            <input className="normal" type="text" name="subject" placeholder="subject" />
                        </div>

                        <div className="input">
                            
                           <textarea className="text-area" name="message" placeholder="message" rows="10" cols="40"></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>

                    <div className="information">
                        <div className="info">
                            <h4>Email</h4>
                            <p className="details">email@yahoo.com</p>
                        </div>

                        <div className="info">
                            <h4>Location</h4>
                            <p className="details">Ontario, California<br></br>USA</p>
                        </div>

                    </div>
                </div>
            </div>
        </StyledContactForm>
    )
}

export default ContactForm
