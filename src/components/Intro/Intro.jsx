import { React } from "react";
import About from "./About/About";
import classes from "./Intro.module.css";
import User from "./User/User";
import Contacts from "./Contacts/Contacts";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.introInner}>
    <User/>
    <About/>
    <Contacts/>
      </div>
    </div>
  );
};

export default Intro;
