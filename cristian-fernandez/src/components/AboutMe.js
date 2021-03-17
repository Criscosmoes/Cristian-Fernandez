import React from 'react'
import styled from 'styled-components'; 


import "aos/dist/aos.css";
import { motion } from 'framer-motion';

const StyledAboutMe = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
}

& > * {
    margin: 1%
}


// first container 
.title {
    display: flex; 
    justify-content: center;
    align-items: center; 
    flex-direction: column; 
    width: 100%;
    height: 25rem; 
}

.title > * {
    margin: .5%
}



h1 {
    font-family: 'Libre Baskerville', sans-serif;
    font-weight: bolder; 
    font-size: 6rem; 
}


h2, h4, h3 {

    font-family: 'montserrat', sans-serif;
    font-weight: bolder;

}

h2 {
    letter-spacing: 0.1rem;
    font-size: 3rem;;
}

h3 {
    font-size: 2.5rem;
}

h4 {
    letter-spacing: 0.1rem;
    font-size: 3rem; 
    color: #DAAF66; 
}

p {
    font-size: 1.9rem; 
    font-family: 'Libre Baskerville', sans-serif;
    font-weight: normal; 
    line-height: 1.875;
    color: #5f5f5f;
}

.info {
    margin: 2%
}

hr {
    width: 10%;
    border: .1px solid #DAAF66;  
}





// second container

.skills-container {
    display:flex;
    justify-content: center; 
    width: 100%
}

.skills-container > * {
    width: 30%;
    margin: 1%; 

}


.technology {
    background: #eee;
    color: #333;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    letter-spacing: 3px;
    font-family: 'montserrat-medium', sans-serif; 
    margin: 1%; 
    font-weight: bolder; 
    border: 1px solid black; 

}

.about-me > * {
    margin: 3%
}

.all-languages {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-wrap: wrap; 
}



.languages > * {
    margin: 3%;
}




// media quieries

@media (max-width: 500px) {


    h1 {
        font-size: 5rem; 
    }

    .title {
        height: 20rem; 
    }

    .skills-container {
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-direction: column;
        text-align: center; 
    }

    p {
        font-size: 1.8rem; 
    }
    

    h2 {
        font-size: 3.7rem; 
    }

    .titles {
        margin-bottom: 10%
    }

    .skills-container > * {
        width: 100%; 
        margin: 2%;
    }

    .all-languages {
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
    }

    .technology {
        margin: 2%
    }

    hr {
        width: 40%
    }



}

`

const AboutMe = () => {






    const languages = ["HTML", "CSS", "Javascript", "Node", "Python", "C++"]

    const technologies = ["React", "Redux", "Express", "Next", "mySQL", "MongoDB", "Mongoose", "Github", "Version Control"]

    const allLanguages = languages.map((cur, index) => {
        return (
            <div key={index} className="technology">{cur}</div>
        )
    })

    const allTechnologies = technologies.map((cur, index)=> {
        return (
            <div key={index} className="technology">{cur}</div>
        )
    })


    return (
        <motion.div exit={{ opacity: 0}} animate={{opacity: 1}} initial={{ opacity: 0}} transition={{ duration: 2}}>
        <StyledAboutMe id="About">
            <div className="title">
                <h4>ABOUT</h4>
                <h1>About Me</h1>
                <h3 className="info">Get to know who I am</h3>
                <hr></hr>
            </div>
            <div className="skills-container">
                <div className="about-me">
                    <h2 className="titles">Hello!</h2>
                    <p>My name is Cristian Fernandez and I am a passionate Web Developer. I love to build efficient and scaleable products using the latest technologies. I would love to be part of a team that wants to have an impact on the current tech savvy world. <br></br> <br></br>Whether it's a project, chat, or job opportuniy, I would love to hear from you. Don't hesitate to reach out.</p>
                </div>
                <div className="languages">
                    <h2 className="titles">Languages</h2>
                    <div className="all-languages">
                        {allLanguages}
                    </div>
                </div>
                <div className="languages">
                    <h2 className="titles">Technologies</h2>
                    <div className="all-languages">
                        {allTechnologies}
                    </div>
                </div>
            </div>
        
        </StyledAboutMe>
        </motion.div>
    )
}

export default AboutMe
