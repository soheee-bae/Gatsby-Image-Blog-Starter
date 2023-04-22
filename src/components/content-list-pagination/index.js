import React from "react";
import "./index.scss";
import { ContentItem } from "../content-Item";
import { Pagination } from "../pagination";
import { PAGE } from "../../constants";

export const ContentListPagination = ({
  filteredPosts,
  paginationRange,
  currentPage,
  handlePageChange,
}) => {
  const firstPageIndex = (currentPage - 1) * PAGE.PAGESIZE;
  const lastPageIndex = firstPageIndex + PAGE.PAGESIZE;
  let finalPosts = filteredPosts.slice(firstPageIndex, lastPageIndex);

  let noPosts = filteredPosts?.length === 0;

  return (
    <div>
      <div>
        <p className="listTitle">Total of {filteredPosts?.length} posts</p>
        {noPosts ? (
          <div className="emptyContainer">There are no posts to display. </div>
        ) : (
          <>
            {finalPosts.map((post, index) => (
              <ContentItem key={index} post={post} />
            ))}
          </>
        )}
      </div>
      <Pagination
        paginationRange={paginationRange}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
