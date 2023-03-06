import React from "react";
import { navigate } from "gatsby";

import ChevronRightDouble from "../../../assets/icons/chvronRightDrouble";
import "./index.scss";

export const MoreButton = () => {
  const handleMore = () => {
    navigate("/posts");
  };

  return (
    <button className="moreButton" onClick={handleMore}>
      For More
      <ChevronRightDouble
        width={16}
        height={16}
        strokeWidth={3}
        color="var(--lg-black)"
      />
    </button>
  );
};
