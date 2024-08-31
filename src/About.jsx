import React from "react";
import { NavLink } from "react-router-dom";
import CustomNavbar from "./toggleBar";
import caseStudy1 from "../src/images/data scie.jpeg";
import caseStudy2 from "../src/images/ML.png";
import caseStudy3 from "../src/images/LLM.jpeg";

const CaseStudies = () => {
  return (
    <>
      <CustomNavbar />
      <section id="case-studies" className="case-studies-section">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#fff" }}>
            Case Studies
          </h2>
          <div className="row">
            {/* Case Study 1 - Data Science */}
            <div className="col-md-4">
              <div className="case-study-card">
                <img
                  src={caseStudy1}
                  alt="Data Science Case Study"
                  className="case-study-image"
                />
                <h3 style={{ color: "#00ff00" }}>Optimizing Sales with Data Science</h3>
                <p style={{ color: "#fff" }}>
                  Leveraged advanced data analytics to optimize sales performance, leading to a 15% increase in revenue. This case study highlights the process of data wrangling, feature engineering, and predictive modeling.
                </p>
                <NavLink to="/case-study-1" className="btn btn-primary">
                  Read More
                </NavLink>
              </div>
            </div>

            {/* Case Study 2 - Machine Learning */}
            <div className="col-md-4">
              <div className="case-study-card">
                <img
                  src={caseStudy2}
                  alt="Machine Learning Case Study"
                  className="case-study-image"
                />
                <h3 style={{ color: "#00ff00" }}>Predictive Maintenance using ML</h3>
                <p style={{ color: "#fff" }}>
                  Developed a machine learning model to predict equipment failure, reducing downtime by 20%. This case study covers data preprocessing, model selection, and deployment in a production environment.
                </p>
                <NavLink to="/case-study-2" className="btn btn-primary">
                  Read More
                </NavLink>
              </div>
            </div>

            {/* Case Study 3 - Large Language Models (LLMs) */}
            <div className="col-md-4">
              <div className="case-study-card">
                <img
                  src={caseStudy3}
                  alt="LLM Case Study"
                  className="case-study-image"
                />
                <h3 style={{ color: "#00ff00" }}>Natural Language Processing with LLMs</h3>
                <p style={{ color: "#fff" }}>
                  Implemented a large language model to automate customer support, improving response accuracy and efficiency. This case study explores fine-tuning LLMs, deployment, and real-world impact.
                </p>
                <NavLink to="/case-study-3" className="btn btn-primary">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
