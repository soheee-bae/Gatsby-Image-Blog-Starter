import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import "./index.scss";
import Theme from "../theme";

export const Navbar = () => {
  const navbarQuery = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          blogName
        }
      }
    }
  `);
  const { blogName } = navbarQuery.site.siteMetadata;

  return (
    <div className="navbar">
      <div className="navbarContent">
        <Link className="navbarTitle" to="/">
          {blogName}
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
