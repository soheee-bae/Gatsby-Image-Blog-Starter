import { useMemo } from "react";
import { CATEGORY } from "../constants";

export const usePosts = ({ posts, selectedCategory }) => {
  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        // let tags = node.frontmatter.tags.filter(
        //   (tag) => selectedTags.indexOf(tag) != -1
        // );
        return (
          selectedCategory === CATEGORY.ALL ||
          node.frontmatter.category === selectedCategory
          // selectedCategory === CATEGORY.ALL ||
          // (node.frontmatter.category === selectedCategory &&
          //   selectedTags.length === 0) ||
          // tags.length > 0
        );
      }),
    [selectedCategory]
  );

  return { filteredPosts };
};
