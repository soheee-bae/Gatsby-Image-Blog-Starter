import React from "react";
import { ContentItem } from "../content-Item";
import "./index.scss";

const ContentList = ({ filteredPosts }) => {
  return (
    <div>
      <p className="contentListTitle">New Posts</p>
      {filteredPosts.map((post, index) => (
        <ContentItem key={index} post={post} />
      ))}
    </div>
  );
};
export default ContentList;
