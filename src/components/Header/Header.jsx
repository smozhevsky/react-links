import { React } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerInner}>
        <a className={classes.headerLogo} href="#">
          smg
        </a>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li className={classes.navLink}>
              <NavLink
                className={`${classes.navLinkItem} ${classes.aboutBtn}`}
                to="/about"
                rel="noopener noreferrer"
                title="В разработке"
              >
                About me
              </NavLink>
            </li>
            <li className={classes.navLink}>
              <NavLink
                className={classes.navLinkItem}
                to="/portfolio"
                rel="noopener noreferrer"
                title="В разработке"
              >
                Portfolio
              </NavLink>
            </li>
            <li className={classes.navLink}>
              <NavLink
                className={`${classes.navLinkItem} ${classes.contacts}`}
                to="/contacts"
                rel="noopener noreferrer"
                title="В разработке"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.menuButton}></div>
      </div>
    </div>
  );
};

export default Header;
