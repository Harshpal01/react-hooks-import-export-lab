import React from "react";
import { image } from "../data/user"; // Import the image from user.js

function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default About;
