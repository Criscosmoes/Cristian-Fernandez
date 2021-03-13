import React from 'react'
import styled from 'styled-components'; 




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
    width: 70%
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
    justify-content: center; 
    align-items: center; 
    width: 60%; 
}

.information {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 30%; 
}

.information > * {
    margin: 1%
}

`


const ContactForm = () => {


    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_3nynart', e.target, 'user_Xhy2HCeGOm75iioB77ysW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset(); 
    }

    




    return (
        <StyledContactForm>
            <div className="container">
                <div className="lets-talk">
                    <h2>Let's Talk.</h2>
                    <p>Whether it's work related or just a chat, send me an email!</p>
                </div>

                <div className="contact">
                    <form onSubmit={sendEmail}>

                        <div className="input">
                            <label>Name</label>
                            <input type="text" name="name" />
                        </div>

                        <div className="input">
                            <label>Email</label>
                            <input type="text" name="email" />
                        </div>

                        <div className="input">
                            <label>Subject</label>
                            <input type="text" name="subject" />
                        </div>

                        <div className="input">
                            <label>Message</label>
                            <input type="text" name="message" />
                        </div>

                        <button type="submit">Sumbit</button>
                    </form>

                    <div className="information">
                        <div>
                            <h4>Email</h4>
                            <p>cristian.fernandez9797@gmail.com</p>
                        </div>

                        <div>
                            <h4>Address</h4>
                            <p>Ontario, California<br></br>USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledContactForm>
    )
}

export default ContactForm
