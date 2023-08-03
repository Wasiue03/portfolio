import React from "react";
import recom from "../src/images/recommend.jpg";
import twee from '../src/images/tweets.png';
import Analysis from '../src/images/Analysis.png';
import { NavLink } from "react-router-dom";
const Portfolio = () => {
  return (
    <>
      <div className="header">
        <h2>Recent Projects</h2>
      </div>
      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-3">
              <img src={recom} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Movie Recommendation System</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
        <div class="card mb-2">
          <div class="row no-gutters">
            <div class="col-md-2">
              <img src={Analysis} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Movie Recommendation System</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
            <div class="col-md-4">
              <img src={recom} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Movie Recommendation System</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 2 months ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
