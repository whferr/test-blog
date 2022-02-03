import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/"><Icon symbol="dragon" /></Link>
      </div>
      <div className={styles.back}>
        <Link to="https://getdragon.ch">Go back to Dragon</Link>
      </div>


    {/*
      <button
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button>
     <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">All posts</Link>
          </li>
        </ul>
      </nav>
    */}

    </div>
  </div>
);

export default Header;
