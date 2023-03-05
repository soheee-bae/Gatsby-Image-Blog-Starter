import React from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "./index.scss";

export const Layout = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        {/* {children} */}
        <Footer />
      </div>
    </React.Fragment>
  );
};
