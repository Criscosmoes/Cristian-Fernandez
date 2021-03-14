import React, {useEffect, useState} from 'react'
import styled from 'styled-components'; 
import { MdKeyboardArrowDown } from 'react-icons/md'; 
import { Link } from 'react-scroll'; 

import Aos from 'aos'; 
import "aos/dist/aos.css"; 

import { AnimatePresence, motion } from 'framer-motion'; 

import Logo from "../pictures/logo.png"

const StyledHeader = styled.div`



@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');


& { 
    height: 100vh;
    background-image: url(${"https://images.unsplash.com/photo-1595529281422-7c5b818aa53f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: 0% 0%; 
    display: flex; 
    flex-direction: column;
    font-family: 'Secular One', sans-serif;
}

nav {
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    color: white;
    height: 7vh;
    z-index: 1; 
    transition: 500ms; 
}

.links {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    width: 30%;
    font-size: 2rem; 
}


.link {
    cursor: pointer;
    color: white; 
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
}

h2 {
    font-size: 6rem;
}

h3 {
    font-size: 5rem; 
    width: 100%; 
    color: #DAAF66; 
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
    margin-bottom: 2%;
    font-size: 1.8rem; 
}

.button {
    text-align: center; 
    width: 40%; 
    padding:3%; 
    border: 4px solid white; 
    margin: 1%; 
    color: white;
}

.button:hover {
    cursor: pointer;
    background: white; 
    color: black; 

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
}

.arrow:hover {
    cursor: pointer;
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

`

const Header = () => {

    const [navBar, setNavBar] = useState(false); 
    const [navHome, setNavHome] = useState(true); 
    const [navAbout, setNavAbout] = useState(false); 
    const [navProjects, setNavProjects] = useState(false); 
    const [navContact, setNavContact] = useState(false); 



    const changeNavBar = () => {

        if(window.scrollY >= 920){
            setNavBar(true); 
            setNavHome(false);
            setNavAbout(true); 
        }
        else if(window.scrollY >= 1600){
            setNavProjects(true); 
            setNavHome(false); 
            setNavAbout(false); 
            setNavContact(false); 
        }
        else if(window.scrollY >= 2314){
            setNavContact(true); 
            setNavHome(false); 
            setNavAbout(false); 
            setNavProjects(false); 
        }
        else {
            setNavBar(false); 
            setNavHome(true); 
            setNavAbout(false); 
            setNavProjects(false); 
            setNavContact(false); 
        }
    

        console.log(window.scrollY); 
    }



    useEffect(() => {
        Aos.init({duration: 4000})
        document.addEventListener("scroll", changeNavBar);
    }, [])

    return (
        <motion.div className="test" exit={{ opacity: 1}} animate={{opacity: 1}} initial={{ opacity: 0}}>
        <StyledHeader id="Home">
            <nav className={`${navBar ? "active" : ""}`}>
                <div className="icon">
                    <img src={Logo} className="logo" />
                </div>

                <div className="links">
                    <Link className={`link ${navHome ? "orange" : ""}`} to="Home" smooth={true}>
                        Home
                    </Link>
                    <Link to="About" smooth={true} className={`link ${navAbout ? "orange" : ""}`}>
                        About
                    </Link>
                    <Link className={`link ${navProjects ? "orange" : ""}`} to="Projects" smooth={true} offset={-40}>
                        Projects
                    </Link>
                    <Link className={`link ${navContact ? "orange" : ""}`} to="Contact" smooth={true}>
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
                            <h2>Fullstack Developer</h2>
                        </div>

                        <div></div>
                        <div></div>
                        <div></div>

                
                    </div>
                    <div className="buttons">
                        <Link className="button" to="Projects" smooth={true} offset={-30}>
                            Projects
                        </Link>
                        <Link className="button" to="About" smooth={true}>
                            Who Am I?
                        </Link>
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
