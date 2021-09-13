import React from "react";
import { string, node } from "prop-types";

import styles from "./styles.module.scss";

const ContentItem = ({ title, id, children }) => (
  <div className={styles.contentItem}>
    <section id={id} />
    <h2>
      <span>{title}</span>
    </h2>
    <div className={styles.contents}>{children}</div>
  </div>
);

ContentItem.propTypes = {
  title: string,
  id: string,
  children: node.isRequired,
};

export default ContentItem;
