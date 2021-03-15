import React, {useState, useEffect} from 'react'
import styled from 'styled-components'; 
import "aos/dist/aos.css";




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
    border-bottom: .1px solid rgba(255, 255, 255, 0.2);; 
    outline: none; 
    font-size: 2rem; 
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
    border: none; 
    outline: none; 
    border-bottom: solid .1px rgba(255, 255, 255, 0.2); 
    background: transparent;
    resize: none;  
    font-size: 2rem;
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
}


.enabled {
    background: #DAAF66;
    border: 2px solid #DAAF66;
    transition: ease-in .5s; 
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
        <StyledContactForm id="Contact">
            <div className="container">
                <div className="lets-talk">
                    <h2>Let's Talk.</h2>
                    <p>Whether it's work related or just a chat, send me an email.</p>
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
                            
                           <textarea onChange={onInputChange} value={userInput.message} className="text-area" name="message" placeholder="Message" rows="10" cols="40"></textarea>
                        </div>

                        <button className={`${disabled ? "" : "enabled"}`} type="submit" disabled={disabled}>{onSuccess ? "Sent!" : "Submit"}</button>
                    </form>

                    <div className="information">
                        <div className="info">
                            <h4>EMAIL</h4>
                            <p className="details">email@yahoo.com</p>
                        </div>

                        <div className="info">
                            <h4>LOCATION</h4>
                            <p className="details">Ontario, California<br></br>USA</p>
                        </div>

                    </div>
                </div>
            </div>
        </StyledContactForm>
    )
}

export default ContactForm
