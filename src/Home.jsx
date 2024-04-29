import React from "react";
import web from "../src/images/home.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import dp from '../src/images/profile-pic.png'
import CustomNavbar from "./toggleBar";

const HomePage = () => {
  return (
    <>
    <CustomNavbar/>
          <Common name="Hello. I'm Abdul Wasiue " imgsrc={web} visit="/contact" btnname="Contact Me"/>




{/* Education, Experience, and Skills sections can be added here */}


      {/* Education, Experience, and Skills sections can be added here */}
    </>
  );
};
  
export default HomePage;
