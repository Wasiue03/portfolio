import React from "react";
import Home from "./Home";
import Skills from './Skills';
import Contact from './Contact';
import { Route, Routes, redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";
import WorkExposure from "./work";

import Projects from "./Projects";
import CaseStudies from "./CaseStudies";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/casest" Component={CaseStudies}/>
        <Route exact path="/skills" Component={Skills}/>
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="/projects" Component={Projects}/>
        <Route exact path="/work" Component={WorkExposure}/>

      </Routes>
    </>
  );
};
export default App;
