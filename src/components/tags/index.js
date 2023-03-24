import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useCategory } from "../../hooks/useCategory";
import "./index.scss";
import { CATEGORY } from "../../constants";

const Categories = ({ edges }) => {
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

  return (
    <div className="tags">
      {filteredTags.map((tag) => (
        <div
          className="tag"
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
