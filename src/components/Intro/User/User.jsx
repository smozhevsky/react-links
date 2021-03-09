import { React } from "react";
import classes from "./User.module.css";

const User = () => {
  return (
    <div className={classes.user}>
      <img
        className={classes.userAvatar}
        src="/images/avatar.png"
        alt="avatar"
      />
      <h1 className={classes.userTitle}>Ilya Smazhevsky</h1>
      <h2>Looking for a job as junior front-end developer</h2>
    </div>
  );
};

export default User;
