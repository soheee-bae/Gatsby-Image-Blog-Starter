import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useCategory } from "../../hooks/useCategory";
import "./index.scss";
import { CATEGORY } from "../../constants";

const Categories = ({ viewAll }) => {
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
              tags
            }
          }
        }
      }
    }
  `);
  const edges = categoriesQuery.allMarkdownRemark.edges;
  const categories = edges.map((data) => data.node.frontmatter.category);

  let tags = [];
  edges.forEach((data) => {
    if (data.node.frontmatter.category === selectedCategory) {
      const tagLists = data.node.frontmatter.tags;
      tagLists.forEach((tag) => tags.push(tag));
    }
  });

  const filteredTags = tags.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const filteredCategories = categories.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  return (
    <div className="categories">
      {viewAll && (
        <div
          className="category"
          data-selected={selectedCategory === CATEGORY.ALL}
          onClick={() => handleSelect(CATEGORY.ALL)}
        >
          All
        </div>
      )}
      {filteredCategories.map((category) => (
        <div
          className="category"
          data-selected={selectedCategory === category}
          onClick={() => handleSelect(category)}
        >
          {category}
        </div>
      ))}
      {filteredTags.map((tag) => (
        <div
          className="category"
          // data-selected={selectedCategory === category}
          // onClick={() => handleSelect(category)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
export default Categories;
