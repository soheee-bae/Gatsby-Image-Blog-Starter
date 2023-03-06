import React from "react";
import "./index.scss";
import { ContentItem } from "../content-Item";

const ContentList = ({ filteredPosts }) => {
  return (
    <div className="contentListContainer">
      {filteredPosts.map((post, index) => (
        <ContentItem key={index} post={post} />
      ))}
    </div>
  );
};
export default ContentList;
