import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/AboutUs";
import { useRouteMatch, Switch, Route } from "react-router-dom";

function AboutUs() {
  let match = useRouteMatch();
  return (
    <div>
      <div className="">
        <Header></Header>
      </div>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
