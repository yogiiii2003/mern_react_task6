import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton href="https://instagram.com/yogiiii____" target="_blank">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://facebook.com/yogikhokrale" target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/yogi-khokrale-b81845279"
          target="_blank"
        >
          <LinkedinIcon />
        </IconButton>
      </div>
      <p>&copy; 2023 yogiKhokrale</p>
    </div>
  );
}

export default Footer;
