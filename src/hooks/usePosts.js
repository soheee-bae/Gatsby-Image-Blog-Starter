import { useMemo } from "react";
import { CATEGORY } from "../constants";

export const usePosts = ({ posts, selectedCategory, selectedTags }) => {
  // console.log("usePosts");
  // console.log(selectedTags);
  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        let tags = node.frontmatter.tags.filter(
          (tag) => selectedTags.indexOf(tag) != -1
        );
        return (
          selectedCategory === CATEGORY.ALL ||
          (node.frontmatter.category === selectedCategory &&
            selectedTags.length === 0) ||
          tags.length > 0
        );
      }),
    [selectedCategory]
  );

  return { filteredPosts };
};
