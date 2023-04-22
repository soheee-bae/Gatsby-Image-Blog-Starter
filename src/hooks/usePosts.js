import { useMemo } from "react";
import { CATEGORY } from "../constants";

export const usePosts = ({ posts, selectedCategory, selectedTag, search }) => {
  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        let tags = node.frontmatter.tags.filter(
          (tag) => selectedTag.indexOf(tag) != -1
        );
        let searchInclude = node.frontmatter.title
          .toLowerCase()
          .includes(search.toLowerCase());

        let noTag = selectedTag.length === 0;
        return (
          (selectedCategory === CATEGORY.ALL &&
            (noTag || tags.length > 0) &&
            searchInclude) ||
          (node.frontmatter.category === selectedCategory &&
            searchInclude &&
            (noTag || tags.length > 0))
        );
      }),
    [selectedCategory, selectedTag, search]
  );

  return { filteredPosts };
};
