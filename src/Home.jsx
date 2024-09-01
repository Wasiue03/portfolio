import React from "react";
import web from "../src/images/ProfileMe.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import dp from '../src/images/profile-pic.png';
import CustomNavbar from "./toggleBar";

const HomePage = () => {
  return (
    <>
      <CustomNavbar />

      {/* <Common name="Hi! I'm Abdul Wasiue" imgsrc={web} visit="/projects" btnname="Doowload CV" /> */}
      <section id="top-section" style={{ padding: "30px 10", backgroundColor: "#222", color: "#fff", textAlign: "start" }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Common 
            name="Hi! I'm Abdul Wasiue" 
            imgsrc={web} 
            visit="/Wasiue_DS_Resume.pdf" // Ensure this path is correct
            btnname="Download CV" 
          />
        </div>
      </section>

      
      

      {/* Additional sections such as Education, Experience, and Skills can be added here */}
    </>
  );
};

export default HomePage;
