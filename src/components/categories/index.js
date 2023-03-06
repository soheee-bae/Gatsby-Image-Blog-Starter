import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";

import "./index.scss";

const Categories = () => {
  //   const handleClick = () => {
  //     navigate("/");
  //   };

  const categoriesQuery = useStaticQuery(graphql`
    query CategoriesQuery {
      allMarkdownRemark(
        filter: { frontmatter: { title: { ne: "null" }, draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              category
            }
          }
        }
      }
    }
  `);
  const edges = categoriesQuery.allMarkdownRemark.edges;
  const categories = edges.map((data) => data.node.frontmatter.category);
  const filteredCategories = categories.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  return (
    <div className="categories">
      {filteredCategories.map((category) => (
        <div className="category">{category}</div>
      ))}
    </div>
  );
};
export default Categories;
