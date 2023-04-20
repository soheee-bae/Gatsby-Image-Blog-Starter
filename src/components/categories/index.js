import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./index.scss";

import { useCategory } from "../../hooks/useCategory";
import { CATEGORY } from "../../constants";

const Categories = () => {
  const { handleSelect, selectedCategory } = useCategory();
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
    <div className="categoryContainer">
      <div className="categories">
        <div
          className="category"
          data-selected={selectedCategory === CATEGORY.ALL}
          onClick={() => handleSelect(CATEGORY.ALL)}
        >
          All
        </div>
        {filteredCategories.map((category) => (
          <div
            className="category"
            data-selected={selectedCategory === category}
            onClick={() => handleSelect(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
