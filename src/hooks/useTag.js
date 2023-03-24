import { useEffect, useState } from "react";
import { navigate } from "gatsby";
import qs from "query-string";

import { CATEGORY } from "../constants";

export const useTag = () => {
  const location = typeof window !== "undefined" && window.location;
  const { search } = location;
  const { category, tag } = qs.parse(search);

  const [selectedTags, setSelectedTags] = useState([]);

  const handleSelect = (tag) => {
    let tagsList = [];
    if (selectedTags.includes(tag)) {
      tagsList = selectedTags.filter((t) => t !== tag);
    } else {
      tagsList = [...selectedTags, tag];
    }
    setSelectedTags(tagsList);
    setTimeout(() => {
      const tagSearch = qs.stringify({
        tag: tagsList,
      });
      navigate(`/posts/?${qs.stringify({ category })}&${tagSearch}`);
    }, 100);
  };

  return { selectedTags, handleSelect };
};
