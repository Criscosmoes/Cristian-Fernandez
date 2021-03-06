import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { Link } from "react-scroll";
import TypeWriterEffect from "react-typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

import { motion } from "framer-motion";

const StyledHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");

  & {
    height: 100vh;
    background-image: url(${"https://images.unsplash.com/photo-1595529281422-7c5b818aa53f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 0%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 7vh;
    font-family: "montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    z-index: 1;
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
    transition: ease-out 0.2s;
  }

  .link:hover {
    color: #daaf66;
    transition: all 0.2s linear;
  }

  // center div

  .center-div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .center-div > * {
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .name {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .title > * {
    margin: 1.5%;
  }

  h1 {
    font-size: 8.5rem;
    font-family: "Libre Baskerville", sans-serif;
    font-weight: bolder;
    color: white;
    width: 100%;
  }

  h3 {
    font-size: 5.5rem;
    width: 100%;
    color: #daaf66;
    font-family: "montserrat", sans-serif;
    font-weight: bolder;
    letter-spacing: 0.1rem;
  }

  h4 {
    font-size: 7.5rem;
    font-family: "Libre Baskerville", sans-serif;
    font-weight: bolder;
    color: white;
    width: 100%;
  }

  .occupation {
    width: 100%;
  }

  .buttons {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    width: 17%;
    font-size: 1.8rem;
    font-family: "montserrat", sans-serif;
    font-weight: bolder;
    letter-spacing: 0.1rem;
    margin-right: 5%;
  }

  .buttons > * {
    margin: 4%;
  }
  .button {
    text-align: center;
    width: 90%;
    padding: 8%;
    border: 4px solid white;
    color: white;
    font-size: 16px;
    transition: ease-out 0.4s;
    text-transform: uppercase;
  }

  .button:hover {
    cursor: pointer;
    background: white;
    color: black;
    transition: all 0.4s ease-in-out;
  }

  .about {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer {
    display: flex;
    justify-content: center;
    margin-bottom: 1.2%;
    width: 95%;
    margin-left: 2%;
  }

  .arrow {
    border: none;
    color: white;
    font-size: 10rem;
    transition: ease-out 0.5s;
  }

  .arrow:hover {
    cursor: pointer;
    color: #daaf66;
    transition: all 0.4s ease-in-out;
  }

  .logo {
    width: 32%;
  }

  .active {
    background: #101010;
    color: white;
    width: 100%;
    position: fixed;
    top: 0px;
    transition: ease-in 0.5s;
  }

  .not-active {
    transition: ease-out 0.5s;
  }

  .orange {
    color: #daaf66;
  }

  .typing-text {
    height: 1vh;
  }

  .icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    width: 80%;
    font-size: 5rem;
  }

  .react-icons {
    outline: none;
    border: none;
    cursor: pointer;
    transition: ease-out 0.2s;
  }

  .react-icons:hover {
    color: rgba(255, 255, 255, 0.6);
    transition: ease-in 0.2s;
  }

  a {
    color: white;
  }

  // media queries

  @media (max-width: 800px) {
    .links {
      font-size: 1.7rem;
      width: 100%;
      height: 100%;
    }

    .link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    // middle header

    .center-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      width: 100%;
    }

    .center-div > * {
      margin: 2%;
    }

    .title {
      width: 100%;
    }

    .title > * {
      margin: 1%;
    }

    h1 {
      font-size: 6rem;
    }

    h3 {
      font-size: 4rem;
    }

    h4 {
      font-size: 5rem;
    }

    .occupation {
      margin-top: 5%;
    }

    //buttons middle header

    .button {
      font-size: 2rem;
      width: 100%;
    }

    .react-icons {
      font-size: 7rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
    }

    .i-am {
      font-size: 3.5rem;
    }

    .footer {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    //background

    //nav bar

    .links {
      font-size: 0.98rem;
      width: 100%;
      height: 100%;
    }

    .link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    // middle header

    .center-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      width: 100%;
    }

    .title {
      width: 100%;
    }

    .title > * {
      margin: 4%;
    }

    .center-div > * {
      margin: 3%;
    }

    h1 {
      font-size: 4rem;
    }

    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 3rem;
    }

    .occupation {
      margin-top: 5%;
    }

    //buttons middle header

    .button {
      font-size: 1.3rem;
      width: 100%;
    }

    .react-icons {
      font-size: 4rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 80%;
    }

    .i-am {
      font-size: 3.5rem;
    }
  }
`;

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const [navHome, setNavHome] = useState(false);
  const [navAbout, setNavAbout] = useState(false);
  const [navProjects, setNavProjects] = useState(false);
  const [navContact, setNavContact] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY >= 900) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }

    const view = window.scrollY;

    if (view >= 0 && view <= 500) {
      // we should be in the home area;

      setNavHome(true);
      setNavAbout(false);
      setNavProjects(false);
      setNavContact(false);
    }

    if (view >= 500 && view <= 1500) {
      // we should be in the about section;

      setNavAbout(true);
      setNavHome(false);
      setNavProjects(false);
      setNavContact(false);
    }

    if (view >= 1500 && view <= 2600) {
      // we should be in the project section;

      setNavProjects(true);
      setNavHome(false);
      setNavAbout(false);
      setNavContact(false);
    }

    if (view >= 2600) {
      // we should be in the contact section;

      setNavContact(true);
      setNavHome(false);
      setNavAbout(false);
      setNavProjects(false);
    }
  };

  //test

  useEffect(() => {
    Aos.init({ duration: 4000 });
    document.addEventListener("scroll", changeNavBar);
  }, []);

  return (
    <motion.div
      className="test"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledHeader id="Home">
        <nav className={`nav ${navBar ? "active" : "not-active"}`}>
          <div></div>

          <div className="links">
            <Link
              className={`link ${navHome ? "orange" : ""}`}
              to="Home"
              smooth={true}
            >
              Home
            </Link>
            <Link
              to="About"
              smooth={true}
              offset={-50}
              className={`link ${navAbout ? "orange" : ""}`}
            >
              About
            </Link>
            <Link
              className={`link ${navProjects ? "orange" : ""}`}
              to="Projects"
              smooth={true}
              offset={-50}
            >
              Projects
            </Link>
            <Link
              className={`link ${navContact ? "orange" : ""}`}
              to="Contact"
              smooth={true}
              offset={-30}
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="center-div">
          <div className="title">
            <h3>WELCOME, I AM</h3>
            <h1>Cristian Fernandez.</h1>
            <h4 className="occupation">Software Developer</h4>
          </div>

          <div className="buttons">
            <div className="icons">
              <a href="https://github.com/Criscosmoes" target="_blank">
                <ImGithub className="react-icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-fernandez-dev/"
                target="_blank"
              >
                <GrLinkedin className="react-icons" />
              </a>
            </div>
            <Link className="button" to="Projects" smooth={true} offset={-30}>
              Projects
            </Link>
            <Link className="button" to="About" smooth={true}>
              Who Am I?
            </Link>
          </div>
        </div>

        <div data-aos="flip-up" data-aos-duration="2000" className="footer">
          <Link className="about" to="About" smooth={true}>
            <MdKeyboardArrowDown className="arrow" />
          </Link>
        </div>
      </StyledHeader>
    </motion.div>
  );
};

export default Header;
