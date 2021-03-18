import React from 'react'
import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 

const StyledProjects = styled.div`


& {

    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    background: #F1F1F1


}

& > * {
    margin: 2%
}

.title {

    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 100%; 
    text-align: center; 
}

.title > * {
    margin: .5%
}

h1 {
    font-size: 6rem;
    font-family: 'Libre Baskerville', sans-serif;
    font-weight: bolder; 
}

h2 {
    font-size: 3.5rem; 
    font-family: 'montserrat', sans-serif;
    font-weight: bolder; 
}


h3 {
    font-size: 2.5rem;
    font-family: 'montserrat', sans-serif;
    font-weight: bolder; 
}

.info {
    margin: 2%
}

h4 {
    font-size: 3.2rem;
    color: #DAAF66;
    font-family: 'montserrat', sans-serif;
    font-weight: bolder;
}

p {
    width: 100%; 
    font-size: 1.7rem; 
    line-height: 2.2rem;
    font-family: 'Libre Baskerville', sans-serif;
    color: #5f5f5f;
}

.project {

    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    width: 47%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column; 
    margin: 1%; 
    background: white; 
    max-height: 80rem; 
}

.project > * {
    margin: 2%
}

.projects {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-wrap: wrap;
    width: 60%;
}


img {
    width: 90%;
}

.details {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    text-align: center;
}

.details > * {
    margin: 3%
}

button {
    width: 80%; 
    padding: 3%;
    outline: none; 
    background: #DAAF66;
    color: white; 
    letter-spacing: 1px; 
    cursor: pointer;
    border: 2px solid #DAAF66; 
    font-family: 'montserrat', sans-serif;
    font-weight: bolder;
    text-transform: uppercase; 
    letter-spacing: 0.2rem;

}

.using {
    display: flex; 
    justify-content: space-evenly; 
    flex-wrap: wrap; 
    width: 100%
}

.technology {
    background: #eee;
    color: #333;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    letter-spacing: 3px;
    font-family: 'montserrat-medium', sans-serif; 
    margin: 1%; 
    font-weight: bolder; 
    border: 1px solid black; 
}

hr {
    width: 10%;
    border: .1px solid #DAAF66;  
}


@media (max-width: 500px){

    // header 

    & > * {
        margin: 6%
    }

    .title > * {
        margin: 2.5%
    }

    h1 {
        font-size: 4.3rem; 
    }


    // projects 

    .projects {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        flex-direction: column;
        width: 100%
    }

    .project {
        width: 90%;
        margin: 5%
    }

    img {
        height: 250px;
        width: 95%
    }

    hr {
        width: 40%
    }



}


@media (max-width: 800px){

// header 

& > * {
    margin: 6%
}

.title > * {
    margin: 2.5%
}

h1 {
    font-size: 4.3rem; 
}


// projects 

.projects {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    width: 100%
}

.project {
    width: 90%;
    margin: 5%
}

img {
    height: 250px;
    width: 95%
}

hr {
    width: 40%
}



}


`

const Projects = () => {

    const projects = [{image: "https://images.unsplash.com/photo-1557200134-3103da7b6bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "Movies Info", description: "Movies Info is a web app that helps you gain instant information on any movie you want. Watch trailers, see cast, and even where you can watch a specific movie. All within seconds. ", url: "https://youtube.com", madeUsing: ["React.js", "React Router", "Redux.js", "Styled Components"]}, {image: "https://images.unsplash.com/photo-1557200134-3103da7b6bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "Prog Typing", description: "Prog Typing is a place where programmers can use to improve their typing speed. Including popular languages like Python, Javascript,etc. Go from a complete beginner to an expert typist.", url: "https://youtube.com", madeUsing: ["React.js", "React Router", "Redux.js", "Node.js", "Express.js", "MongoDB"]}]

    const allProjects = projects.map((cur, index) => {
        return (
            <div className="project" key={index} >
                <img src={cur.image} alt="idk" /> 
                <div className="details">
                    <h2>{cur.title}</h2>
                    <p>{cur.description}</p>
                    <div className="using">
                        {cur.madeUsing.map((cur, index) => {
                            return (
                                <div key={index} className="technology">
                                    {cur}
                                </div>
                            )
                        })}
                    </div>
                    <button>Visit Site</button>
                </div>
            </div>
        )
    })


/*     const onButtonClick = url => {

        // go to the webpage of the project


    } */



    return (
        <motion.div exit={{ opacity: 0}} animate={{opacity: 1}} initial={{ opacity: 0}} transition={{ duration: 2}}>
            <StyledProjects id="Projects">
                <div className="title">
                    <h4>PROJECTS</h4>
                    <h1>Latest Projects</h1>
                    <h3 className="info">These are some of the projects that I have created recently</h3>
                    <hr></hr>
                </div>
                <div className="projects">
                    {allProjects}
                </div>
            </StyledProjects>
        </motion.div>
    )
}

export default Projects
