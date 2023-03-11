import { useMemo } from "react";
import { CATEGORY } from "../constants";

export const usePosts = ({ posts, selectedCategory }) => {
  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({ node }) =>
          selectedCategory === CATEGORY.ALL ||
          node.frontmatter.category === selectedCategory
      ),
    [selectedCategory]
  );

  return { filteredPosts };
};
