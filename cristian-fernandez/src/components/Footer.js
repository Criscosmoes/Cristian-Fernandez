import React from 'react'
import styled from "styled-components";
import { GrLinkedin } from 'react-icons/gr'; 
import { ImGithub } from 'react-icons/im';



const StyledFooter = styled.div`



& {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    height: 13vh;
    background: black; 
}

.copyright {
    font-size: 2rem; 
    color: white; 
    margin-left: 5%;
    font-family: 'montserrat', sans-serif;
    font-weight: bolder; 
}

.icons {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    width: 10%; 
    font-size: 6rem; 
    color: white; 
    margin-right: 5%; 
}

.icon {
    border: none; 
    cursor: pointer;
}

a {
    color: white; 
}


@media (max-width: 800px){

.icons {
    font-size: 3rem; 
    width: 30%
}


@media (max-width: 500px){

    .icons {
    font-size: 3rem; 
    width: 30%
    }
}




}


`

const Footer = () => {
    return (
        <StyledFooter>
            <div className="copyright">
                Copyright &#169; 2021
            </div>
            <div className="icons">
                <a href="https://github.com/Criscosmoes" target="_blank"><ImGithub className="icon" /></a>
                <a href="https://www.linkedin.com/in/cristian-fernandez-4357091a9/" target="_blank"><GrLinkedin className="icon" /></a>
            </div>
        </StyledFooter>
    )
}

export default Footer
