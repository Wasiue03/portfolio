import React from "react";
import Card from "./Card";
import CustomNavbar from "./toggleBar";

const Skills = () => {
  return (
    <>
      <CustomNavbar />
      <section id="skills-section" style={{ padding: "50px 0", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
        <div className="container">
          <h1 className="mb-4" style={{ fontSize: "36px", fontWeight: "bold" }}>Areas of Expertise</h1>
          <p className="mb-5" style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            As a Data Scientist, I specialize in translating complex data into valuable insights that drive decision-making and cost savings. My expertise includes advanced machine learning algorithms, data visualization, and powerful tools like Python, SQL, R, and Power BI. I am committed to leveraging data to enhance business outcomes, optimize processes, and provide clear, actionable insights.
          </p>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
