import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./index.scss";
import { useTag } from "../../hooks/useTag";

const Tags = () => {
  const { handleSelect, selectedTag } = useTag();

  const tagsQuery = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { title: { ne: "null" }, draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);
  const edges = tagsQuery.allMarkdownRemark.edges;
  const tags = edges.map((data) => data.node.frontmatter.tags);

  let tagList = [];
  tags.forEach((tag) =>
    tag.forEach((t) => {
      if (!tagList.includes(t)) {
        tagList.push(t);
      }
    })
  );

  return (
    <div className="tagsContainer">
      {tagList.map((tag) => (
        <div scr className="tag" onClick={() => handleSelect(tag)}>
          {tag}
        </div>
      ))}
    </div>
  );
};
export default Tags;
