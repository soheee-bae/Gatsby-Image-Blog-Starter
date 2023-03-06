import { Link } from "gatsby";
import React from "react";
import "./index.scss";
import Theme from "../theme";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContent">
        <Link className="navbarTitle" to="/">
          SH TIL
        </Link>
        <div className="navbarLinks">
          <Link className="navbarItem" to="/posts">
            Posts
          </Link>
          <Link className="navbarItem" to="/about">
            About
          </Link>
          <Theme />
        </div>
      </div>
    </div>
  );
};
