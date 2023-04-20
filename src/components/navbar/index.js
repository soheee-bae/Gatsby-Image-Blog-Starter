import { useStaticQuery, graphql } from "gatsby";
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
        <a className="navbarTitle" href="/">
          {blogName}
        </a>
        <div className="navbarLinks">
          <a className="navbarItem" href="/posts">
            Posts
          </a>
          <a className="navbarItem" href="/about">
            About
          </a>
          <Theme />
        </div>
      </div>
    </div>
  );
};
