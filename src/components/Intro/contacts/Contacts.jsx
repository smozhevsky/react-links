import { React } from "react";
import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={classes.userLinks}>
      <a className={classes.userLink} href="https://t.me/smozhevsky">
        <img
          className={classes.userSocialLogo}
          src="/images/tg.png"
          alt="Telegramm"
        />
        Telegram
      </a>
      <a
        className={classes.userLink}
        href="https://www.linkedin.com/in/smozhevsky/"
      >
        <img
          className={classes.userSocialLogo}
          src="/images/linkedin.png"
          alt="linkedin"
        />
        LinkedIn
      </a>
      <a className={classes.userLink} href="https://github.com/smozhevsky">
        <img
          className={classes.userSocialLogo}
          src="/images/github.png"
          alt="github"
        />
        GitHub
      </a>
    </div>
  );
};

export default Contacts;
