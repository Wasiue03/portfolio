import React from "react";
import web from "../src/images/ProfileMe.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import dp from '../src/images/profile-pic.png'
import CustomNavbar from "./toggleBar";

const HomePage = () => {
  return (
    <>
    <CustomNavbar/>
          <Common name="Hi! I'm Abdul Wasiue " imgsrc={web} visit="/projects" btnname="My Projects"/>




{/* Education, Experience, and Skills sections can be added here */}


      {/* Education, Experience, and Skills sections can be added here */}
    </>
  );
};
  
export default HomePage;
