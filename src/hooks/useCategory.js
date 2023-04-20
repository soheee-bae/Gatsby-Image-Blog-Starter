import { useEffect, useState } from "react";
import { navigate } from "gatsby";
import qs from "query-string";

import { CATEGORY } from "../constants";

export const useCategory = () => {
  const location = typeof window !== "undefined" && window.location;
  const { search } = location;
  const { category, tag } = qs.parse(search);

  const [selectedCategory, setSelectedCategory] = useState(
    category || CATEGORY.ALL
  );

  const handleSelect = (category) => {
    setSelectedCategory(category);
    const tags = !tag
      ? ""
      : typeof tag === "string"
      ? `&${qs.stringify({ tag })}`
      : tag?.map((tag) => `&${qs.stringify({ tag })}`).join("");
    navigate(`/posts/?${qs.stringify({ category })}${tags}`);
  };

  useEffect(() => {
    if (!search) {
      setSelectedCategory(CATEGORY.ALL);
    } else {
      setSelectedCategory(category);
    }
  }, [search]);

  return { selectedCategory, handleSelect };
};
