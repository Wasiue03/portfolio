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
      <div className="col-md-4 col-10 ">
        <div className="card">
          <img src={DS} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Data Analysis</h5>
            <p class="card-text">
              Extract Information from data by applying various techniques
              of Data Extraction and plots using python 
            </p>
            
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={ML} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Machine Learning</h5>
            <p class="card-text">
              Create Machine Learning and Deep learning Models with excellent 
              accuracy and prediction
            </p>
            
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={NLP} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">NLP</h5>
            <p class="card-text">
              Natural Language Processing techniques to perfom multiple tasks 
              like sentiment analysis, tokeniazation, part-of-speech tagging and Stop word Removal
            </p>
            
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={deploy} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Deployement</h5>
            <p class="card-text">
              Implementing and Deploy Machine Learning Models with Docker.  
            </p>
            
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={flutter} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Flutter</h5>
            <p class="card-text">
              Create User Interface with flutter and flask integration with backend 
              machine learning models 
            </p>
            
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={web} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">
              Impelement Frontend with React and Backend with ML models using Flask python
              Framework
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
