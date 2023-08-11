import React from "react";
import recom from "../src/images/recommend.png";
import twee from '../src/images/tweets.png';
import stat from '../src/images/stat.jpg';
import Analysis from '../src/images/Analysis.png';

const Projects = () => {
  return (
    <>
      <div className="header">
        <h2>Recent Projects</h2>
      </div>
      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={recom} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Movie Recommendation System</h5>
                <p class="card-text">
                A movie recommendation system in machine learning utilizes algorithms to analyze user preferences and historical data, recommending relevant films 
                based on similarities to user tastes. It employs techniques like collaborative filtering, content-based filtering, and hybrid approaches 
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 2 months ago</small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1IyFC-ki7e0JgWJ6HRHNojZl_othHtT__?usp=sharing" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Open Google Colab Notebook
        </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={twee} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Sentiment Analysis On Tweets</h5>
                <p class="card-text">
                In this sentiment analysis project using NLP, the goal is to create a machine learning model capable of accurately categorizing text into positive, negative, or neutral sentiments. The project involves data preprocessing, 
                tokenization, feature extraction, and model training using techniques like Bag-of-Words, TF-IDF, or word embeddings. 
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 months ago</small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1qRaj7AuviXQ8nHbMRMlRqteUpPourz75?usp=sharing" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Open Google Colab Notebook
        </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-2">
              <img src={Analysis} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">Data Analysis</h4>
                <h5>Data:  Supply Chain</h5>
                <p class="card-text">
                This data analysis project involves exploring and examining a dataset to extract meaningful insights and patterns. It includes tasks like data cleaning, visualization, statistical analysis, and hypothesis testing. The project showcases the ability to work with real-world data and draw valuable conclusions, making it a valuable skill in the field of data science
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 2 months ago</small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1qO77ttPZ46vmjbzoQvOp_lhT1SHn_zPV?usp=sharing" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Open Google Colab Notebook
        </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-2">
              <img src={stat} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Statistical Analysis</h5>
                <p class="card-text">
                In this statistical analysis project using Python, we aim to explore and analyze a dataset using libraries like Pandas, NumPy. Tasks include data cleaning, descriptive statistics,
                  Seaborn. The project showcases the ability to apply statistical concepts and Python programming skills to gain insights from data, making it a valuable addition to any data analysis portfolio.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 2 months ago</small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1-Dd4Mu-IAJb4yrf9LPHRf37XCb4mWtO2?usp=sharing" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Open Google Colab Notebook
        </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
