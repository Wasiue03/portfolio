import React from "react";
import web from "../src/images/home.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const HomePage = () => {
  return (
    <>
          <Common name="Grow Your Business With " imgsrc={web} visit="/service" btnname="Get Started"/>
    </>
  );
};
export default HomePage;
