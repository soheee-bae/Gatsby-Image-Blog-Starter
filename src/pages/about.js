import * as React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";

import { Layout } from "../layout";
import "./about.scss";

export default function About({ data }) {
  const { aboutPageBackground } = data.site.siteMetadata;

  return (
    <Layout
      headerImg={aboutPageBackground}
      title="About"
      subtitle="Everything about me"
    >
      <div className="aboutContainer">
        <Bio />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        aboutPageBackground
      }
    }
  }
`;
