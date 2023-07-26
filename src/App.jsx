import React from "react";
import Home from "./Home";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import { Route, Routes, redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/service" Component={Service}/>
        <Route exact path="/contact" Component={Contact}/>
      </Routes>
    </>
  );
};
export default App;