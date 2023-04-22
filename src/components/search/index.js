import React from "react";
import "./index.scss";
import { Search } from "../../../assets/icons/search";

export const SearchField = ({ setSearch }) => {
  var typewatch = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  return (
    <div className="search">
      <Search color="var(--lg-darkest-gray)" />
      <input
        type="text"
        onKeyUp={(e) => {
          typewatch(() => {
            setSearch(e.target.value);
          }, 500);
        }}
      />
    </div>
  );
};
