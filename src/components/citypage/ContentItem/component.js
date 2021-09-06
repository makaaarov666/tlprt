import React from "react";
import PropTypes, { string } from "prop-types";

import styles from "./styles.module.scss";

const ContentItem = ({ title, children }) => (
  <div className={styles.contentItem}>
    <h2>
      <span>{title}</span>
    </h2>
    <div className={styles.contents}>{children}</div>
  </div>
);

ContentItem.propTypes = {
  title: string,
  children: PropTypes.node.isRequired,
};

export default ContentItem;
