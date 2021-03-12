import React, {useEffect} from 'react'
import styled from 'styled-components'; 

import Aos from "aos";
import "aos/dist/aos.css";

const StyledAboutMe = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
}

.title {
    display: flex; 
    justify-content: center;
    align-items: center; 
    flex-direction: column; 
    width: 100%; 
    height: 400px; 
}

.title > * {
    margin: 1%
}

h1 {
    font-size: 7rem; 
    font-family: 'Secular One', sans-serif;
}

h2 {
    font-size: 4rem; 
    font-family: 'Zilla Slab', sans-serif;

}

h3 {
    font-size: 3rem; 
    font-family: 'Zilla Slab', sans-serif;
}

.info {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    width: 100%; 
    height: 350px; 
}

.info > * {
    margin: 2%
}

.about-me {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-direction: column; 
    width: 33%;
    height: 100%; 
}




p {
    width: 80%;
    font-size: 1.8rem; 
    color: #606060; 
    letter-spacing: .1rem; 
    line-height: 2.5rem; 
    height: 50%; 
    font-family: 'Zilla Slab', sans-serif;
}

hr {
    width: 10%; 
    border: .5px solid lightgray; 
}

.all-languages {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-wrap: wrap; 
    width: 100%; 
    font-family: 'Secular One', sans-serif;
    height: 50%; 
}

.language {
    margin: 1%; 
    width: 20%; 
    text-align: center; 
    padding: 2%; 
    background: #F0F0F0; 
    color: #333333; 
    border: 2px solid black;
    font-size: 1.7rem; 
}



`

const AboutMe = () => {






    const languages = ["HTML", "CSS", "Javascript", "NodeJS", "Python", "C++"]

    const technologies = ["React.js", "Redux", "Express.js", "Next.js", "SQL", "MongoDB", "Mongoose", "Version Control", "Github"]

    const allLanguages = languages.map(cur => {
        return (
            <div className="language">{cur}</div>
        )
    })

    const allTechnologies = technologies.map(cur => {
        return (
            <div className="language">{cur}</div>
        )
    })

    return (
        <StyledAboutMe id="About">
            <div className="title">
                <h1>About Me</h1>
                <h3>Get to know me</h3>
                <hr></hr>
            </div>

            <div className="info">
                <div className="about-me" data-aos="fade-down" data-aos-duration="1000" data-aos-placement="top-bottom" >
                   <h2>Hello!</h2>
                   <p>My name is Cristian Fernandez and I am a passionate Web Developer. I love to build efficient and scaleable products using the latest technologies. I would love to be part of a team that wants to have an impact on the current tech savvy world. </p>
                </div>

                <div className="about-me" data-aos="fade-down" data-aos-duration="2000" data-aos-placement="top-bottom">
                    <h2>Languages</h2>
                    <div className="all-languages">
                        {allLanguages}
                    </div>
                </div>

                <div className="about-me" data-aos="fade-down" data-aos-duration="3000" data-aos-placement="top-bottom">
                    <h2>Technologies</h2>
                    <div className="all-languages">
                        {allTechnologies}
                    </div>
                </div>
            </div>
        </StyledAboutMe>
    )
}

export default AboutMe
