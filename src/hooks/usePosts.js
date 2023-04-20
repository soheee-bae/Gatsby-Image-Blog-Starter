import { useMemo } from "react";
import { CATEGORY } from "../constants";

export const usePosts = ({ posts, selectedCategory, selectedTag }) => {
  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        let tags = node.frontmatter.tags.filter(
          (tag) => selectedTag.indexOf(tag) != -1
        );
        return (
          selectedCategory === CATEGORY.ALL ||
          (node.frontmatter.category === selectedCategory &&
            selectedTag.length === 0) ||
          (node.frontmatter.category === selectedCategory && tags.length > 0)
        );
      }),
    [selectedCategory, selectedTag]
  );

  return { filteredPosts };
};
