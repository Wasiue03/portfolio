import React from "react";
import web from "../src/images/home.svg"
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name" style={{fontSize: "20px"}}> <br />Data Science - ML Engineering </strong>
                  </h1>
                  <h2 className="my-3" style={{color: "#fff", justifyContent:'flex-start'}}>
                  Passionate Data Scientist and Machine Learning Engineer with a comprehensive skill set spanning data analysis, machine learning, and software development.  Dedicated to leveraging data-driven insights and advanced technologies to solve complex problems and drive innovation. Let's transform data into actionable intelligence together.
                    
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
