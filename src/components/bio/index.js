import React from "react";
import Image from "gatsby-image";
import { graphql, navigate, useStaticQuery } from "gatsby";

import "./index.scss";

const Bio = () => {
  const handleClick = () => {
    navigate("/about");
  };

  const bioQuery = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { regex: "/potato.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          bio
          githubUrl
        }
      }
    }
  `);
  const { author, bio } = bioQuery.site.siteMetadata;

  return (
    <div className="bioContainer">
      <div className="bioImage">
        <Image
          fixed={bioQuery.avatar.childImageSharp.fixed}
          alt={author}
          fadeIn={true}
        />
      </div>
      <div className="bioContent">
        <div>
          <span
            className="bioLink"
            onClick={handleClick}
            onKeyDown={handleClick}
            role="presentation"
          >
            {author}
          </span>
        </div>
        <p className="bioText">{bio}</p>
      </div>
    </div>
  );
};
export default Bio;
