import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { useCategory } from "../../hooks/useCategory";
import "./index.scss";
import { CATEGORY } from "../../constants";
import qs from "query-string";

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

  const filteredCategories = categories.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  return (
    <div className="categoryContainer">
      <div className="categories">
        {viewAll && (
          <div
            className="category"
            data-selected={selectedCategory === CATEGORY.ALL}
            onClick={(ev) => handleSelect(ev, CATEGORY.ALL)}
          >
            All
          </div>
        )}
        {filteredCategories.map((category) => (
          <Link
            scr
            className="category"
            data-selected={selectedCategory === category}
            to={`/posts/?${qs.stringify({ category })}`}
            // onClick={(ev) => handleSelect(ev, category)}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Categories;
