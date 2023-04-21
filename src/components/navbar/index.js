import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import "./index.scss";
import Theme from "../theme";
import { useScroll } from "../../hooks/useScroll";

export const Navbar = () => {
  const [checked, setChecked] = useState(true);
  const { scrollTriggered } = useScroll();

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
    <div
      id="scroller"
      className="navbar"
      data-scroll={scrollTriggered}
      data-light={checked}
    >
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
          <Theme
            checked={checked}
            setChecked={setChecked}
            scrollTriggered={scrollTriggered}
          />
        </div>
      </div>
    </div>
  );
};
