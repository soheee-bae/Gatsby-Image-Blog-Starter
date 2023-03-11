import { useMemo } from "react";

export const usePosts = ({ posts, selectedCategory }) => {
  console.log(posts);
  console.log(selectedCategory);
  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({ node }) => node.frontmatter.category === selectedCategory
      ),
    [selectedCategory]
  );

  return { filteredPosts };
};
