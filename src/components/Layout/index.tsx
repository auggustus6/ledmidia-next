import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Wpp from "../Wpp";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Wpp />
    </>
  );
};

export default Layout;
