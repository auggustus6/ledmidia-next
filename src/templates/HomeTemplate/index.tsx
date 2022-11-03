import React from "react";
import Layout from "../../components/Layout";
import Home from "../../components/Home";
import * as Styles from "./styles";
import About from "../../components/About";
import Advertisers from "../../components/Advertisers";
import Panels from "../../components/Panels";

const HomeTemplate = () => {
  return (
    <Layout>
      <Styles.ContainerMain>
        <Home />
        <About />
        <Advertisers />
        <Panels />
      </Styles.ContainerMain>
    </Layout>
  );
};

export default HomeTemplate;
