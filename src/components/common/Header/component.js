import React from "react";

import SearchBar from "components/common/SearchBar";

import styles from "./styles.module.scss";
import { urlImgLogo } from "consts/urls";

const Header = () => (
  <header className={styles.header}>
    <SearchBar />
    <a href="/" className={styles.logo}>
      <img className={styles.logoImg} src={urlImgLogo} alt="teleportLogo" />
    </a>
  </header>
);

export default Header;
