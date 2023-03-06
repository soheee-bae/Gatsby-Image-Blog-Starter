import React from "react";
import "./index.scss";

const PostHeader = ({ data }) => {
  return (
    <div className="postHeader">
      <div className=" postTitle">{data.title}</div>
      <div className=" postDate">{data.date}</div>
    </div>
  );
};
export default PostHeader;
