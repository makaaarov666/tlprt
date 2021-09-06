import React from "react";
import { Link } from "react-router-dom";
// const menuPoints = [
//   {
//     label: "About",
//     path: "/about",
//   },
//   {
//     label: "About1",
//     path: "/about2",
//   },
// ];

const Menu = () => (
  <>
    <Link>About</Link>
    <Link>Chart</Link>
    <Link>Table</Link>
    <Link>Map</Link>
  </>
);

export default Menu;
