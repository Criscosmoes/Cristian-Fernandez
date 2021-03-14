import React from 'react'
import styled from 'styled-components'; 

const StyledProjects = styled.div`


& {

    display: flex; 
    flex-direction: column; 
    background: lightgray; 


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
    margin: 2%
}

h1 {
    font-size: 6rem; 
}

h3 {
    font-size: 3rem; 
}

.project {
    width: 33%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column; 
    margin: 1%; 
    background: white; 
}

.project > * {
       
}

.projects {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-wrap: wrap; 
}


img {
    width: 100%
}


`

const Projects = () => {

    const projects = [{image: "https://images.unsplash.com/photo-1557200134-3103da7b6bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "Movies App", description: "This is a movies app", url: "https://youtube.com"}, {image: "https://images.unsplash.com/photo-1557200134-3103da7b6bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "Movies App", description: "This is a movies app", url: "https://youtube.com"}, {image: "https://images.unsplash.com/photo-1557200134-3103da7b6bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "Movies App", description: "This is a movies app", url: "https://youtube.com"}, {image: "https://images.unsplash.com/photo-1557200134-3103da7b6bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "Movies App", description: "This is a movies app", url: "https://youtube.com"}]

    const allProjects = projects.map(cur => {
        return (
            <div className="project">
                <img src={cur.image} /> 
                <h2>{cur.title}</h2>
                <p>{cur.description}</p>
                <button>See Live!</button>
            </div>
        )
    })


    const onButtonClick = url => {

        // go to the webpage of the project


    }



    return (
        <StyledProjects id="Projects">
            <div className="title">
                <h1>Latest Projects</h1>
                <h3>These are some of the projcts that I have created recently</h3>
            </div>
            <div className="projects">
                {allProjects}
            </div>
        </StyledProjects>
    )
}

export default Projects
