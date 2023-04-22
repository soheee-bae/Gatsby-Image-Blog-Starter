import React, { useState } from "react";
import { graphql } from "gatsby";
import { Layout } from "../layout";
import "./posts.scss";

import { usePagination } from "../hooks/usePagination";
import { useCategory } from "../hooks/useCategory";
import { usePosts } from "../hooks/usePosts";
import { useTag } from "../hooks/useTag";
import { PAGE } from "../constants/page";

import { ContentListPagination } from "../components/content-list-pagination";
import Categories from "../components/categories";
import { SearchField } from "../components/search";
import Tags from "../components/tags";

export default function Posts({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const { postsPageBackground } = data.site.siteMetadata;

  const { selectedCategory } = useCategory();
  const { selectedTag } = useTag();

  const [search, setSearch] = useState("");
  const { filteredPosts } = usePosts({
    posts,
    selectedCategory,
    selectedTag,
    search,
  });
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
      <div className="postsContainer">
        <SearchField setSearch={setSearch} />
        <Categories />
        <Tags />
        <hr />
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
