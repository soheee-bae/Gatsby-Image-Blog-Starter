import React from "react";
import qs from "query-string";

import { CONTENTITEM } from "../../constants";
import "./index.scss";

export const ContentItem = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node;
  const { TITLE, SUBTITLE, CATEGORY, ICON, DATE, CONTENT } = CONTENTITEM;

  const category = CATEGORY.ALL;

  return (
    <div className="contentItem" role="presentation">
      <div className="emptyBorder" />
      <a
        href={`${fields.slug}?${qs.stringify({ category })}#blog`}
        className="contentItemInner"
      >
        {CATEGORY && <p className="itemCategory">{frontmatter.category}</p>}
        <div className="itemHeader">
          {ICON && frontmatter.emoji && (
            <p role="img" aria-label="itemIcon" className="itemIcon">
              {frontmatter.emoji}
            </p>
          )}
          {TITLE && <p className="itemTitle">{frontmatter.title}</p>}
        </div>
        {SUBTITLE && <p className="itemSubTitle">{frontmatter.subtitle}</p>}
        {CONTENT && (
          <p
            className="itemText"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}
        {DATE && <p className="itemDate">{frontmatter.date}</p>}
      </a>
    </div>
  );
};
