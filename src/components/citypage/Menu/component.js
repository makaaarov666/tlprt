import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "./styles.module.scss";

const menuPoints = [
  {
    label: "About",
    path: "about",
    id: "menuPointsAbout",
  },
  {
    label: "Chart",
    path: "chart",
    id: "menuPointsChart",
  },
  {
    label: "Table",
    path: "table",
    id: "menuPointsTable",
  },
  {
    label: "Map",
    path: "map",
    id: "menuPointsMap",
  },
];

const Menu = () => (
  <ul className={styles.menu}>
    {menuPoints.map(({ id, path, label }) => (
      <HashLink
        key={id}
        smooth
        to={`/details#${path}`}
        scroll={sectionToScroll =>
          sectionToScroll.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }
      >
        <li key={id}>{label}</li>
      </HashLink>
    ))}
  </ul>
);

export default Menu;
