import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import PostContent from "../components/post-content";
import PostNavigation from "../components/post-navigation";

import { useCategory } from "../hooks/useCategory";
import { usePagination } from "../hooks/usePagination";

import { PAGE } from "../constants";
import { Layout } from "../layout";
import "./blog-post.scss";

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { selectedCategory } = useCategory();

  console.log(frontmatter);
  return (
    <Layout
      headerImg={frontmatter.background}
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      category={frontmatter.category}
      tags={frontmatter.tags}
      icon={frontmatter.emoji}
      date={frontmatter.date}
    >
      <div className="templateContainer">
        <PostContent content={html} />
        <PostNavigation
          data={pageContext}
          selectedCategory={selectedCategory}
        />
        <hr />
        <Bio />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const blogQuery = graphql`
  query BlogQuery($slug: String!) {
    allMarkdownRemark {
      totalCount
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        category
        tags
        background
        emoji
        draft
      }
    }
  }
`;
