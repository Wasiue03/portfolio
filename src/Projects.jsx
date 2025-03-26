import React from "react";
import recom from "../src/images/recommend.png";
import twee from '../src/images/tweets.png';
import stat from '../src/images/stat.jpg';
import Analysis from '../src/images/Analysis.png';
import g from '../src/images/LT.webp';
import s from '../src/images/summary.png';
import v from '../src/images/streaming.jpg';
import u from '../src/images/pipeline.jpg';
import w from '../src/images/package.png';
import CustomNavbar from "./toggleBar";
const Projects = () => {
  return (
    <>
      <CustomNavbar/>
      <div className="header">
        <h2 style={{ color: "#fff" }}>Projects</h2>
      </div>

      {/* LLM Chatbot Project Card - Add this with your other project cards */}
<div className="Card">
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src={require('../src/images/llm-chatbot.jpg')} class="card-img" alt="LLM Chatbot" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" style={{color: "red"}}>Personal LLM Work Assistant</h5>
          <p class="card-text">
            A CPU-optimized personal assistant chatbot using DeepSeek-R1 1.3B LLM through Ollama. Features include:
            - Streamlit web interface for natural conversations
            - Text-to-speech functionality for interactive responses
            - Optimized for low-resource machines (Intel i3/12GB RAM)
            - Customizable response length and creativity controls
            - Supports both code assistance and general work queries
          </p>
          <p class="card-text">
            <small class="text-muted">Python - Ollama - Streamlit - Transformers - Pyttsx3</small>
          </p>
        </div>
        <div class="card-footer">
          <a href="https://github.com/Wasiue03/LLM-Chatbot" class="btn btn-danger mr-2" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
         
        </div>
      </div>
    </div>
  </div>
</div>

        {/* New Project: Apache Kafka Realtime Streaming */}
        <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={w} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{color: "red"}}>Python Package For Time Series </h5>
                <p class="card-text">
                I developed and published a Python package for time series forecasting on PyPI, featuring support for ARIMA, SARIMA, and Exponential Smoothing models. The package is designed for ease of use, providing straightforward functionality for users to preprocess data, build forecasting models, and make predictions. It simplifies the time series forecasting process, allowing users to quickly implement and evaluate different models for their forecasting needs. By making the package available on PyPI, I ensured that it is easily accessible to the Python community for integration into various time series analysis projects.
                </p>
                <p class="card-text">
                  <small class="text-muted">Python - Setup - Twine - PyPI - Package</small>
                </p>
              </div>
              <a href="https://pypi.org/project/forecastify/0.1/#files" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
                Go To Package
              </a>
            </div>
          </div>
        </div>
      </div>


      
      {/* New Project: Apache Kafka Realtime Streaming */}
      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={v} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{color: "red"}}>Apache Kafka Realtime Streaming</h5>
                <p class="card-text">
                In this real-time data streaming project, I utilized Apache Kafka to process and analyze live streaming data for various use cases such as user engagement monitoring and web traffic analysis. By ingesting continuous streams of data, the system was designed to process high-velocity events and monitor key performance metrics in real-time. Additionally, I integrated Prometheus to capture and store metrics, which were then visualized on Grafana dashboards. This setup enabled the creation of real-time alerts based on the data streams, providing proactive monitoring and rapid issue detection for system health and performance.
                </p>
                <p class="card-text">
                  <small class="text-muted">Apache Kafka - Redis - Python - Promethues Grafana</small>
                </p>
              </div>
              <a href="https://github.com/Wasiue03/Monitoring-Pipeline" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
                Open Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* New Project: Azure AKS ML Pipelines */}
      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={u} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{color: "red"}}>Azure AKS ML Pipelines</h5>
                <p class="card-text">
                A machine learning pipeline project deployed on Azure Kubernetes Service (AKS), leveraging Azure ML for scalable model training, deployment, and orchestration. The project involved end-to-end machine learning lifecycle management, from data ingestion to model deployment, with a focus on real-time and batch processing.The project included the automation of deployment processes using CI/CD pipelines configured with Azure DevOps, allowing for continuous integration and deployment of models. Kubernetes Helm charts were used to deploy the machine learning models as scalable microservices on AKS. I ensured that the deployment of new model versions was automated using GitOps workflows, streamlining the entire deployment process.
                </p>
                <p class="card-text">
                  <small class="text-muted">Azure - Kubernetes - Docker - Python</small>
                </p>
              </div>
              <a href="https://github.com/Wasiue03/aks-pipelines" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
                Open Github Repository
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
                <h5 class="card-title" style={{color: "red"}}>Movie Recommendation System</h5>
                <p class="card-text">
                  A movie recommendation system in machine learning utilizes algorithms to analyze user preferences and historical data, recommending relevant films 
                  based on similarities to user tastes. It employs techniques like collaborative filtering, content-based filtering, and hybrid approaches.
                </p>
                <p class="card-text">
                  <small class="text-muted">React JS - Scikit-learn - Cosine Similarity - Word Embeddings </small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1IyFC-ki7e0JgWJ6HRHNojZl_othHtT__?usp=sharing" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
                Open Google Colab Notebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-2" id="trans">
              <img src={g} class="card-img" alt="..." />
            </div>
            <div class="col-md-10">
              <div class="card-body" style={{paddingLeft: "20%"}}>
                <h5 class="card-title" style={{color: "red"}}>Language Translation using Encoder Decoder</h5>
                <p class="card-text">
                  A language translation model translates text from Urdu to English using an encoder-decoder sequence-to-sequence (seq2seq) architecture. 
                </p>
                <p class="card-text">
                  <small class="text-muted">Flutter - Firebase - Provider - Flask - Transformers - Statistical Modeling</small>
                </p>
              </div>
              <a href="https://github.com/Wasiue03/linguotech" class="btn btn-danger" target="_blank" rel="noopener noreferrer" style={{marginLeft: "30%"}}>
                Open Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-2" id="trans">
              <img src={s} class="card-img" alt="..." />
            </div>
            <div class="col-md-10">
              <div class="card-body" style={{paddingLeft: "20%"}}>
                <h5 class="card-title" style={{color: "red"}}>Text Summarization Using MBert</h5>
                <p class="card-text">
                  Text summarization using mBERT, a multilingual language model, involves condensing large texts or documents into concise summaries while preserving key information.
                </p>
                <p class="card-text">
                  <small class="text-muted">Flutter - Dart - Google API - Flask - Firebase</small>
                </p>
              </div>
              <a href="https://github.com/Wasiue03/linguotech" class="btn btn-danger" target="_blank" rel="noopener noreferrer" style={{marginLeft: "20%"}}>
                Open Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Card">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={v} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{color: "red"}}>Tableau Visualization Dashboards</h5>
                <p class="card-text">
                  Tableau dashboards offer insightful visualizations across varied datasets, including Superstores, customer segmentation, and gaming dashboards.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 5 months ago</small>
                </p>
              </div>
              <a href="https://public.tableau.com/app/profile/abdul.wasiue/vizzes" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
                Open Tableau Profile
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
                <h5 class="card-title" style={{color: "red"}}>Sentiment Analysis On Tweets</h5>
                <p class="card-text">
                  This sentiment analysis project using NLP categorizes text into positive, negative, or neutral sentiments using machine learning.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 5 months ago</small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1qRaj7AuviXQ8nHbMRMlRqteUpPourz75?usp=sharing" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
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
                <h5 class="card-title" style={{color: "red"}}>Data Analysis</h5>
                <h5>Data:  Supply Chain</h5>
                <p class="card-text">
                  This project involves data cleaning, visualization, statistical analysis, and hypothesis testing on supply chain data.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 2 months ago</small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1qO77ttPZ46vmjbzoQvOp_lhT1SHn_zPV?usp=sharing" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
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
                <h5 class="card-title" style={{color: "red"}}>Statistical Analysis</h5>
                <p class="card-text">
                  This project focuses on statistical analysis using Python libraries like Pandas, NumPy, and Seaborn to gain insights from datasets.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 7 months ago</small>
                </p>
              </div>
              <a href="https://colab.research.google.com/drive/1-Dd4Mu-IAJb4yrf9LPHRf37XCb4mWtO2?usp=sharing" class="btn btn-danger" target="_blank" rel="noopener noreferrer">
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
