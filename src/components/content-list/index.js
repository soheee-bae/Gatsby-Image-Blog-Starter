import React from "react";
import { ContentItem } from "../content-Item";
import "./index.scss";

const ContentList = ({ filteredPosts }) => {
  return (
    <div>
      <p className="contentListSubtitle">New Posts</p>
      <p className="contentListTitle">My recent posts</p>
      {filteredPosts.map((post, index) => (
        <ContentItem key={index} post={post} />
      ))}
    </div>
  );
};
export default ContentList;
