import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../layout";

import { usePagination } from "../hooks/usePagination";
import { useCategory } from "../hooks/useCategory";
import { usePosts } from "../hooks/usePosts";
import { PAGE } from "../constants/page";

import "./posts.scss";
import { ContentListPagination } from "../components/content-list-pagination";
import Categories from "../components/categories";

export default function Posts({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const { postsPageBackground } = data.site.siteMetadata;

  const { selectedCategory } = useCategory();
  const { filteredPosts } = usePosts({ posts, selectedCategory });
  const { paginationRange, currentPage, handlePageChange } = usePagination({
    totalCount: filteredPosts.length,
    siblingCount: PAGE.SIBLINGCOUNT,
    pageSize: PAGE.PAGESIZE,
  });

  return (
    <Layout
      headerImg={postsPageBackground}
      title="Posts"
      subtitle="Check out all the posts"
    >
      <Categories />
      <div className="postsContainer">
        <ContentListPagination
          filteredPosts={filteredPosts}
          paginationRange={paginationRange}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "null" }, draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300, truncate: true)
          frontmatter {
            title
            subtitle
            draft
            date(formatString: "MMMM DD, YYYY")
            category
            background
            emoji
            tags
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        postsPageBackground
      }
    }
  }
`;
