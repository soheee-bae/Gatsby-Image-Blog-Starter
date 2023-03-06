import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import "./index.scss";

export const Layout = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Header {...rest} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
