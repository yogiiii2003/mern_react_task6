import React from "react";
import { IconButton } from "@mui/material";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, My Name is Yogi</h2>
        <div className="prompt">
          <p>A Software developer with a passion for learning and creating.</p>
          <IconButton
            href="https://www.linkedin.com/in/yogi-khokrale-b81845279"
            target="_blank"
          >
            <LinkedinIcon />
          </IconButton>
          <IconButton
            href="https://mailto:yogikhokrale2003@gmail.com"
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
          <IconButton href="https://github.com/yogiiii2003" target="_blank">
            <GithubIcon />
          </IconButton>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML,CSS,BootStrap,ReactJS,MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,ExpressJS,MonoDB,MySQL,.NET</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,JAVA,Python,C,C++,R-studio,SQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
