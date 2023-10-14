import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import EyeIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.img} alt={project} />
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
      <div className="logo">
        <IconButton href="https://github.com/yogiiii2003" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://github.com/yogiiii2003" target="_blank">
          <EyeIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ProjectDisplay;
