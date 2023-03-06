import React from "react";
import "./index.scss";

const PostContent = ({ content }) => {
  return (
    <div
      className=" postContent"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
export default PostContent;
