import React from "react";
import web from "../src/images/data.jpg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
    <Common name="Wlecome to About Page" imgsrc={web} visit="/contact" btnname="Contact Now"/>
      </>
  );
};
export default About;
