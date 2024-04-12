import React from "react";
import "./Link.css";
const Link = ({ title, link, sidebar }) => {
  return (
    <a
      href={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title}
    </a>
  );
};

export default Link;
