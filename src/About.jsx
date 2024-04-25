import React from "react";
import { NavLink } from "react-router-dom";
import dp from "../src/images/ProfileMe.png"
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-left">
          <div className="about-content">
              <img src={dp} alt="My Image" className="about-image" />
            <h2  style={{ color: "#fff" }}>Who am I?</h2>
            <p style={{ color: "#fff" }}>
              Hi, I'm Abdul Wasiue, a passionate Data Scientist and Software Developer based in Islamabad, Pakistan. With a background in Computer Science from Comsats University Islamabad and specialized training in Data Science, I have developed expertise in transforming data into actionable insights and crafting innovative software solutions.
              My journey in the field of technology has led me to work on a variety of projects, ranging from developing predictive models and implementing machine learning algorithms to engineering high-performing mobile applications. I thrive in dynamic environments where I can leverage my skills in Python, SQL, Tableau, and other tools to drive innovation and achieve tangible business outcomes.
              Whether it's analyzing large-scale datasets to optimize processes or building intuitive mobile applications, I am committed to delivering impactful results and contributing to the advancement of technology. Feel free to explore my portfolio to learn more about my work and accomplishments.
            </p>
            <NavLink to="https://www.linkedin.com/in/abdul-wasiue/" className="btn btn-primary">About Me</NavLink>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
