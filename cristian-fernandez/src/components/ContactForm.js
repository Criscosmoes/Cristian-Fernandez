import React, {useState, useEffect} from 'react'
import styled from 'styled-components'; 
import "aos/dist/aos.css";
import { motion } from 'framer-motion'; 




import emailjs from 'emailjs-com'; 


/* https://images.unsplash.com/photo-1595529281422-7c5b818aa53f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80 */

const StyledContactForm = styled.div`

& {
    background-image: url(${"https://images.unsplash.com/photo-1595529281422-7c5b818aa53f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: 0% 0%; 
    color: white; 
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
    margin: .5%;
}


.lets-talk {
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    text-align: center; 
    width: 100%

}

h1 {
    font-size: 6rem;
    font-family: 'Libre Baskerville', sans-serif;
    font-weight: bolder; 
}

h2 {
    font-size: 7rem; 
}

h3 {
    font-size: 2.5rem;
    font-family: 'montserrat', sans-serif;
    font-weight: bolder; 
}

h4 {
    letter-spacing: 0.1rem;
    font-size: 3rem; 
    color: #DAAF66; 
    font-family: 'montserrat', sans-serif;
    font-weight: bolder;
}

h5 {
    font-family: 'montserrat', sans-serif;
    font-weight: bolder;
    font-size: 2.2rem;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.16rem;
}

p {
    font-size: 2.5rem;
    font-weight: bolder; 
    color:  rgba(255, 255, 255, 0.8); 
}

form {

    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 50%; 
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

.info > * {
    margin: 7%; 
}


.details {
    font-size: 1.6rem;
    color: white;
    font-family: 'montserrat', sans-serif;
    text-transform: uppercase;
}

label {
    font-size: 3rem; 
}

input {

    font-family: 'montserrat', sans-serif;
    font-weight: bolder;
    border: none; 
    border-bottom: .1px solid rgba(255, 255, 255, 0.2);; 
    outline: none; 
    font-size: 1.8rem; 
    background: transparent; 
    color: white;
    transition: ease-out .2s; 
}

input::placeholder {
    color: rgba(255, 255, 255, 0.5); 
    
}

input:focus {
    border-bottom: .1px solid white;
    transition: ease-in .2s; 
}

.text-area {
    font-family: 'montserrat', sans-serif;
    font-weight: bolder;
    border: none; 
    outline: none; 
    border-bottom: solid .1px rgba(255, 255, 255, 0.2); 
    background: transparent;
    resize: none;  
    font-size: 1.8rem;
    color: white; 
    transition: ease-out .2s; 
}


.text-area:focus {
    border-bottom: .1px solid white;
    transition: ease-in .2s; 
}

.text-area::placeholder {
    color: rgba(255, 255, 255, 0.5); 
}

.normal {
    height: 60px; 
}

button {
    font-size: 2rem; 
    padding: 2.5%;
    width: 95%;
    background: gray; 
    letter-spacing: .1rem; 
    outline: none; 
    color: white; 
    cursor: pointer;
    transition: ease-out .4s;
    font-family: 'montserrat', sans-serif;
    font-weight: bolder; 
    text-transform: uppercase;
    letter-spacing: 0.2rem;
}


.enabled {
    background: #DAAF66;
    border: 2px solid #DAAF66;
    transition: ease-in .5s; 
}


hr {
    width: 10%;
    border: .1px solid #DAAF66;  
}

.info {
    margin: 2%
}

`


const ContactForm = () => {

    const initialInput = {
        name: "", 
        email: "", 
        subject: "",
        message: "", 
    }


    const [userInput, setUserInput] = useState(initialInput); 
    const [disabled, setDisabled] = useState(true); 
    const [onSuccess, setOnSuccess] = useState(false); 


    const checkInput = () => {

        if(userInput.name && userInput.email && userInput.subject && userInput.message){
            setDisabled(false); 
        }
        else {
            setDisabled(true); 
        }
    }


    const sendEmail = e => {
        e.preventDefault();

        //start loading here

        if(userInput.name && userInput.email && userInput.subject && userInput.message){

            emailjs.sendForm('service_4652yqq', 'template_3nynart', e.target, 'user_Xhy2HCeGOm75iioB77ysW')
            .then((result) => {
                console.log(result.text);
                setOnSuccess(true);
                setUserInput(initialInput); 
                //stop loading here

                setTimeout(() => {
                    setOnSuccess(false); 
                }, 6000)


            }, (error) => {
                setOnSuccess(false); 
            });



            e.target.reset(); 

            setUserInput(initialInput); 
        }

        

    }

    const onInputChange = e => {

        setUserInput({...userInput, [e.target.name]: e.target.value}); 


    }

    useEffect(() => {

        checkInput(); 

    },[userInput.message, userInput.name, userInput.email, userInput.subject])




    return (
        <motion.div exit={{ opacity: 0}} animate={{opacity: 1}} initial={{ opacity: 0}} transition={{ duration: 2}}>
        <StyledContactForm id="Contact">
            <div className="container">
                <div className="lets-talk">
                    <h4>CONTACT</h4>
                    <h1>Let's Talk.</h1>
                    <h3 className="info">Whether it's work related or just a chat, send me an email.</h3>
                    <hr></hr>
                </div>

                <div className="contact">
                    <form onSubmit={sendEmail}>

                        <div className="input">
                            
                            <input onChange={onInputChange} value={userInput.name} className="normal" type="text" name="name" placeholder="Name" />
                        </div>

                        <div className="input">
                            
                            <input onChange={onInputChange} value={userInput.email} className="normal" type="text" name="email" placeholder="Email" />
                        </div>

                        <div className="input">
                            
                            <input onChange={onInputChange} value={userInput.subject} className="normal" type="text" name="subject" placeholder="Subject" />
                        </div>

                        <div className="input">
                            
                           <textarea onChange={onInputChange} value={userInput.message} className="text-area" name="message" placeholder="Message" rows="4" cols="20"></textarea>
                        </div>

                        <button className={`${disabled ? "" : "enabled"}`} type="submit" disabled={disabled}>{onSuccess ? "Sent!" : "Submit"}</button>
                    </form>

                    <div className="information">
                        <div className="info">
                            <h5>EMAIL</h5>
                            <p className="details">crisfernandez.dev@gmail.com</p>
                        </div>

                        <div className="info">
                            <h5>LOCATION</h5>
                            <p className="details">Ontario, California<br></br>USA</p>
                        </div>

                    </div>
                </div>
            </div>
        </StyledContactForm>
        </motion.div>
    )
}

export default ContactForm
