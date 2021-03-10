import { React } from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <p>
        <b>I have the following knowledge and skills:</b>
        <br />
        <b>Programming languages and technologies used, etc.:</b>
        <br />
        HTML, CSS( CSS), Javascript, jQuery, study React JS, semantic and
        adaptive layout, cross-browser and valid code
        <br />
        <b>Package Manager:</b>npm
        <br />
        <b>Assemblers:</b>webpack, gulp
        <br />
        <b>Version control systems:</b>Git (GitHub)
        <br />
        <b>Tools:</b>VSCode, Photoshop, Figma, Avocode
        <br />
        <b>Development principles and methodologies:</b>OOP, BEM
        <br />
        <b>
          Language skills:English-reading/writing with partial use of the
          translator. Ready to level up
        </b>
      </p>
    </div>
  );
};

export default About;
