import React from "react";
import PropTypes from "prop-types";

import Header from "components/common/Header";

import styles from "./styles.module.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.layout}>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
