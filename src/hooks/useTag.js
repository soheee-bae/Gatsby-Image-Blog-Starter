import { useState, useEffect } from "react";
import { navigate } from "gatsby";
import qs from "query-string";

export const useTag = () => {
  const location = typeof window !== "undefined" && window.location;
  const { search } = location;
  const { category, tag } = qs.parse(search);

  const [selectedTags, setSelectedTags] = useState([]);

  const handleSelect = (tag) => {
    let tagsList = null;
    if (selectedTags.includes(tag)) {
      tagsList = selectedTags.filter((t) => t !== tag);
    } else {
      tagsList = [...selectedTags, tag];
    }
    console.log(tagsList);
    setSelectedTags(tagsList);
    const tagSearch = qs.stringify({
      tag: tagsList,
    });
    navigate(`/posts/?${qs.stringify({ category })}&${tagSearch}`);
  };

  useEffect(() => {
    // console.log(tag);
    if (tag) {
      setSelectedTags(tag);
    }
  }, [search]);

  return { selectedTags, handleSelect };
};
