import React from "react";
import { navigate } from "gatsby";
import qs from "query-string";

import { CONTENTITEM } from "../../constants";
import "./index.scss";

export const ContentItem = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node;
  const { TITLE, SUBTITLE, CATEGORY, ICON, DATE, CONTENT } = CONTENTITEM;

  const handleClick = () => {
    const category = CATEGORY.ALL;
    navigate(`${fields.slug}?${qs.stringify({ category })}#blog`);
  };

  return (
    <div
      className="contentItem"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="presentation"
    >
      {CATEGORY && <p className="itemCategory">{frontmatter.category}</p>}
      <div>
        {ICON && <p className="itemIcon">{frontmatter.icon}</p>}
        {TITLE && <p className="itemTitle">{frontmatter.title}</p>}
      </div>
      {SUBTITLE && <p className="itemSubTitle">{frontmatter.subtitle}</p>}
      {CONTENT && (
        <div
          className="itemText"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      )}
      {DATE && <p className="itemDate">{frontmatter.date}</p>}
    </div>
  );
};
