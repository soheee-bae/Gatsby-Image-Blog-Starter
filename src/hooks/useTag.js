import { useState, useEffect } from "react";
import { navigate } from "gatsby";
import qs from "query-string";

export const useTag = () => {
  const location = typeof window !== "undefined" && window.location;
  const { search } = location;
  const { category, tag } = qs.parse(search);

  const [selectedTag, setSelectedTag] = useState([]);

  const handleSelect = (tag) => {
    let finalTags = [];
    if (selectedTag.includes(tag) && selectedTag.length !== 0) {
      finalTags = selectedTag?.filter((t) => t !== tag);
    } else {
      finalTags = [...selectedTag, tag];
    }
    setSelectedTag(finalTags);
    const tags = finalTags.map((tag) => `&${qs.stringify({ tag })}`).join("");
    navigate(`/posts/?${qs.stringify({ category })}${tags}`);
  };

  useEffect(() => {
    if (!tag) {
      setSelectedTag([]);
    } else {
      setSelectedTag(typeof tag === "string" ? [tag] : tag);
    }
  }, [search]);

  return { selectedTag, handleSelect };
};
