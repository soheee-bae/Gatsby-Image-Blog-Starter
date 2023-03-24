import React from "react";
import { useCategory } from "../../hooks/useCategory";
import { useTag } from "../../hooks/useTag";
import "./index.scss";

const Tags = ({ edges }) => {
  const { selectedTags, handleSelect } = useTag();
  const { selectedCategory } = useCategory();

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
          data-selected={selectedTags.includes(tag)}
          onClick={() => handleSelect(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
export default Tags;
