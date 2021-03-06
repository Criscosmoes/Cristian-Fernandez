import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import MoviesLogo from "../pictures/Movies-Info-Mock-Up.png";
import CodeTyping from "../pictures/Code-Typing-Mock-Up.png";

const StyledProjects = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f1f1f1;
  }

  & > * {
    margin: 2%;
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
    margin: 0.5%;
  }

  h1 {
    font-size: 6rem;
    font-family: "Libre Baskerville", sans-serif;
    font-weight: bolder;
  }

  h2 {
    font-size: 3.5rem;
    font-family: "montserrat", sans-serif;
    font-weight: bolder;
  }

  h3 {
    font-size: 2.5rem;
    font-family: "montserrat", sans-serif;
    font-weight: bolder;
  }

  .info {
    margin: 2%;
  }

  h4 {
    font-size: 3.2rem;
    color: #daaf66;
    font-family: "montserrat", sans-serif;
    font-weight: bolder;
  }

  p {
    width: 80%;
    font-size: 1.7rem;
    line-height: 2.2rem;
    font-family: "Libre Baskerville", sans-serif;
    color: #5f5f5f;
  }

  .project {
    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    width: 47%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 1%;
    background: white;
    height: 1000px;
  }

  .project > * {
    margin: 1%;
  }

  .projects {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
  }

  img {
    width: 98%;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .details > * {
    margin: 3%;
  }

  button {
    width: 80%;
    padding: 3%;
    outline: none;
    background: #daaf66;
    color: white;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid #daaf66;
    font-family: "montserrat", sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 1%;
  }

  .buttons {
    width: 80%;
  }

  .using {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
  }

  .technology {
    background: #eee;
    color: #333;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    letter-spacing: 3px;
    font-family: "montserrat-medium", sans-serif;
    margin: 1%;
    font-weight: bolder;
    border: 1px solid black;
  }

  hr {
    width: 10%;
    border: 0.1px solid #daaf66;
  }

  @media (max-width: 800px) {
    // header

    & > * {
      margin: 6%;
    }

    .title > * {
      margin: 2.5%;
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
      width: 100%;
    }

    .project {
      width: 90%;
      margin: 5%;
    }

    img {
      height: 600px;
      width: 95%;
    }

    hr {
      width: 40%;
    }
  }

  @media (max-width: 500px) {
    // header

    & > * {
      margin: 6%;
    }

    .title > * {
      margin: 2.5%;
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
      width: 100%;
    }

    .project {
      width: 90%;
      margin: 5%;
    }

    img {
      height: 260px;
      width: 100%;
    }

    hr {
      width: 40%;
    }

    button {
      height: 5.8rem;
      width: 90%;
      font-size: 1.6rem;
    }

    .buttons {
      width: 100%;
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      image: MoviesLogo,
      title: "Movies Info",
      description:
        "Movies Info is a web app that helps you gain instant information on any movie you want. Watch trailers, see cast, and even a detailed description of a movie. All within seconds. ",
      url: "https://movies-info.vercel.app/",
      madeUsing: [
        "React.js",
        "React Router",
        "Redux.js",
        "Styled Components",
        "Framer Motion",
      ],
      gitHub: "https://github.com/Criscosmoes/Movies-Info",
    },
    {
      image: CodeTyping,
      title: "Code Typing",
      description:
        "Code Typing is a place where programmers can use to improve their typing speed. Including popular languages like Python, Javascript,etc. Go from a complete beginner to an expert typist.",
      url: "https://code-typing.herokuapp.com/",
      madeUsing: [
        "React.js",
        "React Router",
        "Redux.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Passport",
        "Heroku",
      ],
      gitHub: "https://github.com/Criscosmoes/Code-Typing",
    },
  ];

  const onUrlClick = (link) => {
    window.open(link);
  };

  const allProjects = projects.map((cur, index) => {
    return (
      <div className="project" key={index}>
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
              );
            })}
          </div>

          <div className="buttons">
            <button onClick={() => onUrlClick(cur.url)}>Visit Site</button>
            <button onClick={() => onUrlClick(cur.gitHub)}>Source Code</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledProjects id="Projects">
        <div className="title">
          <h4>PROJECTS</h4>
          <h1>Recent Projects</h1>
          <h3 className="info">
            These are some of the projects that I have created.
          </h3>
          <hr></hr>
        </div>
        <div className="projects">{allProjects}</div>
      </StyledProjects>
    </motion.div>
  );
};

export default Projects;
