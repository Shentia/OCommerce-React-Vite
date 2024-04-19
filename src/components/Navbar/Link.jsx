import React from "react";
import "./Link.css";
import { NavLink } from "react-router-dom";
const Link = ({ title, link, sidebar, image }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      <img src={image} alt="" />
      {title}
    </NavLink>
  );
};

export default Link;
