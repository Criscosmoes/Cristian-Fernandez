import React from 'react'
import styled from 'styled-components'; 
import { MdKeyboardArrowDown } from 'react-icons/md'; 
import { Link } from 'react-scroll'; 


const StyledHeader = styled.div`



@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');


& { 
    height: 100vh;
    background-image: url(${"https://images.unsplash.com/photo-1555122125-5b2774fec2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: 0% 80%; 
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
    text-align: center; 
    width: 72%; 
    height: 100%; 
    color: white; 
}

h1 {
    font-size: 8rem; 
}

h2 {
    font-size: 6rem;
}

h3 {
    font-size: 5rem; 
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
    width: 45%; 
    margin-bottom: 2%;
    font-size: 1.8rem; 
}

.button {
    text-align: center; 
    width: 30%; 
    padding:3%; 
    border: 2px solid white; 
    margin: 1%; 
    color: white;
}

.button:hover {
    cursor: pointer;
    background: white; 
    color: black; 

}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.arrow {
    border: none;
    color: white; 
    font-size: 10rem; 
}




`

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <div className="icon">
                    Hey
                </div>

                <div className="links">
                    <Link className="link">
                        Home
                    </Link>
                    <Link className="link">
                        About
                    </Link>
                    <Link className="link">
                        Projets
                    </Link>
                    <Link className="link">
                        Contact
                    </Link>
                </div>
            </nav>

            <div className="center-div">
                <div className="details">
                    <div className="name">
                        <h3>Welcome,</h3>
                        
                        <div className="occupation">
                            <h1>I am Cristian Fernandez.</h1>
                            <h2>Fullstack Developer</h2>
                        </div>

                        <div></div>
                        <div></div>
                        <div></div>

                
                    </div>
                    <div className="buttons">
                        <Link className="button">
                            Projects
                        </Link>
                        <Link className="button">
                            Who Am I?
                        </Link>
                    </div>
                </div>
            </div>

            <div className="icon">
                <MdKeyboardArrowDown className="arrow"/>
            </div>
        </StyledHeader>
    )
}

export default Header
