import React, {useEffect, useState} from 'react'
import styled from 'styled-components'; 
import { MdKeyboardArrowDown } from 'react-icons/md'; 
import { GrLinkedin } from 'react-icons/gr'; 
import { ImGithub } from 'react-icons/im'; 
import { Link } from 'react-scroll'; 
import TypeWriterEffect from "react-typewriter-effect";
import Aos from 'aos'; 
import "aos/dist/aos.css"; 

import { motion } from 'framer-motion'; 

import Logo from "../pictures/logo.png"

const StyledHeader = styled.div`



@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');



& { 
    height: 100vh;
    background-image: url(${"https://images.unsplash.com/photo-1595529281422-7c5b818aa53f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: 0% 0%; 
    display: flex; 
    flex-direction: column;
}

.nav {
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    color: white;
    height: 7vh;
    z-index: 1;
    font-family: 'montserrat', sans-serif;
    text-transform: uppercase; 
    font-size: 14px; 
    letter-spacing: 0.25rem;
    font-weight: bolder;
}

.links {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    width: 30%;
}


.link {
    cursor: pointer;
    color: white; 
    transition: ease-out .2s;
}

.link:hover {
    color: #DAAF66;
    transition: all .2s linear; 
}

.icon {
    margin-left: 4%; 
}

// center div

.center-div {
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 100vh;
}

.details {

    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 50vh;
    width: 100%
}

.name {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-direction: column;
    width: 70%; 
    height: 100%; 
    color: white; 
    margin-left: 8%
}

h1 {
    font-size: 8rem;
    font-family: 'Libre Baskerville', sans-serif;
    font-weight: bolder; 
}

h2 {
    font-size: 6rem;
}

h3 {
    font-size: 5rem; 
    width: 100%; 
    color: #DAAF66;
    font-family: 'montserrat', sans-serif;
    font-weight: bolder; 
    letter-spacing: 0.1rem; 
}

.occupation {
    width: 100%
}

.occupation > * {
    margin: 1%
}


.buttons {
    display: flex;
    flex-direction: column; 
    width: 40%; 
    font-size: 1.8rem; 
    font-family: 'montserrat', sans-serif;
    font-weight: bolder; 
    letter-spacing: 0.1rem;


}

.button {
    text-align: center; 
    width: 40%; 
    padding:3%; 
    border: 4px solid white; 
    margin: 1%; 
    color: white; 
    font-size: 15px; 
    transition: ease-out 0.4s; 
    text-transform: uppercase; 
}


.button:hover{
    cursor: pointer;
    background: white; 
    color: black; 
    transition: all .4s ease-in-out; 
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2%
}

.arrow {
    border: none;
    color: white; 
    font-size: 10rem;
    transition: ease-out 0.5s; 
}

.arrow:hover {
    cursor: pointer;
    color: #DAAF66;
    transition: all .4s ease-in-out; 

}


.logo {
    width: 32%;
}



.active {
    background: black; 
    color: white; 
    width: 100%; 
    position: fixed; 
    top: 0px; 
    transition: 450ms; 
    transition-duration: 1s; 
}

.test {
    background: black; 
}

.orange {
    color: #DAAF66; 
}

.typing-text {
    height: 1vh; 
}

.icons {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center;
    color: white; 
    width: 42%; 
    font-size: 5rem; 
    margin-top: 3%; 
}

.react-icons {
    outline: none; 
    border: none; 
    cursor: pointer;
    transition: ease-out .2s; 
}

.react-icons:hover {
    color: rgba(255, 255, 255, 0.6); 
    transition: ease-in .2s; 
}



`

const Header = () => {

    const [navBar, setNavBar] = useState(false); 
    const [navHome, setNavHome] = useState(false); 
    const [navAbout, setNavAbout] = useState(false); 
    const [navProjects, setNavProjects] = useState(false); 
    const [navContact, setNavContact] = useState(false); 



    const changeNavBar = () => {

        if(window.scrollY >= 920){
            setNavBar(true); 
        }


        const view = window.scrollY; 

        if (view >= 0 && view <= 600){
            // we should be in the home area; 

            setNavHome(true); 
            setNavAbout(false); 
            setNavProjects(false); 
            setNavContact(false);  
        }



        if (view >= 600 && view <= 1500){
            // we should be in the about section; 

            setNavAbout(true); 
            setNavHome(false); 
            setNavProjects(false); 
            setNavContact(false); 
        }

        if (view >= 1500 && view <= 2400){
            // we should be in the project section; 

            setNavProjects(true); 
            setNavHome(false); 
            setNavAbout(false); 
            setNavContact(false); 
        }

        if (view >= 2700){
            // we should be in the contact section; 

            setNavContact(true); 
            setNavHome(false); 
            setNavAbout(false); 
            setNavProjects(false) 
        }

    


    }



    useEffect(() => {
        Aos.init({duration: 4000})
        document.addEventListener("scroll", changeNavBar);
    }, [])

    return (
        <motion.div className="test" exit={{ opacity: 1}} animate={{opacity: 1}} initial={{ opacity: 0}}>
        <StyledHeader id="Home">
            <nav className={`nav ${navBar ? "active" : ""}`}>
                <div className="icon">
                    
                </div>

                <div className="links">
                    <Link className={`link ${navHome ? "orange" : ""}`} to="Home" smooth={true}>
                        Home
                    </Link>
                    <Link to="About" smooth={true} offset={-20} className={`link ${navAbout ? "orange" : ""}`}>
                        About
                    </Link>
                    <Link className={`link ${navProjects ? "orange" : ""}`} to="Projects" smooth={true} offset={-40}>
                        Projects
                    </Link>
                    <Link className={`link ${navContact ? "orange" : ""}`} to="Contact" smooth={true} offset={-30}>
                        Contact
                    </Link>
                </div>
            </nav>

            <div className="center-div">
                <div className="details">
                    <div className="name">
                        <h3>WELCOME,</h3>
                        
                        <div className="occupation">
                            <h1>I am Cristian Fernandez.</h1>
                            <div className="typing-text"><TypeWriterEffect className="fullstack"
                            textStyle={{ fontFamily: "Libre Baskerville", fontSize: "6rem", fontWeight: "bolder"}}
                            startDelay={800}
                            cursorColor="blue"
                            multiText={[
                                "Fullstack Developer",
                            ]}
                            typeSpeed={80}
                            /></div>
                        </div>

                        <div></div>
                        <div></div>
                        <div></div>

                
                    </div>
                    <div className="buttons command">
                        <Link className="button" to="Projects" smooth={true} offset={-30}>
                            Projects
                        </Link>
                        <Link className="button" to="About" smooth={true}>
                            Who Am I?
                        </Link>
                        <div className="icons">
                            <ImGithub className="react-icons" />
                            <GrLinkedin className="react-icons" />
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="flip-up" data-aos-duration="3000" className="footer">
                <Link to="About" smooth={true}>
                    <MdKeyboardArrowDown className="arrow" />
                </Link>
            </div>
        </StyledHeader>
        </motion.div>
    )
}

export default Header
