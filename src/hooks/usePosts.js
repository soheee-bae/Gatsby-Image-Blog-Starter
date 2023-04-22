import { useMemo } from "react";
import { CATEGORY } from "../constants";

export const usePosts = ({ posts, selectedCategory, selectedTag }) => {
  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        let tags = node.frontmatter.tags.filter(
          (tag) => selectedTag.indexOf(tag) != -1
        );

        let noTag = selectedTag.length === 0;
        return (
          (selectedCategory === CATEGORY.ALL && (noTag || tags.length > 0)) ||
          (node.frontmatter.category === selectedCategory &&
            (noTag || tags.length > 0))
        );
      }),
    [selectedCategory, selectedTag]
  );

  return { filteredPosts };
};
