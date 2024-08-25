import React from "react";
import DS from "../src/images/data_analysis.png";
import ML from "../src/images/ML.png";
import NLP from "../src/images/nlp.png";
import flutter from "../src/images/flutter.png";
import web from "../src/images/web.jpg";
import deploy from "../src/images/deploy.png";

import { NavLink } from "react-router-dom";
const Card = () => {
  return (
    <>
      <div className="row">
        {[
          {
            img: DS,
            title: "Data Analysis",
            text: "Extract Information from data by applying various techniques of Data Extraction and plots using Python.",
          },
          {
            img: ML,
            title: "Machine Learning",
            text: "Create Machine Learning and Deep Learning Models with excellent accuracy and prediction.",
          },
          {
            img: NLP,
            title: "NLP",
            text: "Natural Language Processing techniques to perform tasks like sentiment analysis, tokenization, part-of-speech tagging, and stop word removal.",
          },
          {
            img: deploy,
            title: "Deployment",
            text: "Implement and deploy Machine Learning models with Docker, AWS, and Kubernetes.",
          },
          {
            img: flutter,
            title: "Data Visualization",
            text: "Create interactive and business-related dashboards with Tableau and Power BI.",
          },
          {
            img: web,
            title: "Forecasting & Optimization",
            text: "Implement optimization techniques and code reliability to increase efficiency using robust frameworks.",
          },
        ].map((card, index) => (
          <div className="col-md-4 col-12 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title text-center">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
