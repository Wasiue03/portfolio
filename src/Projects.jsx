import React from "react";
import recom from "../src/images/recommend.png";
import twee from '../src/images/tweets.png';
import stat from '../src/images/stat.jpg';
import Analysis from '../src/images/Analysis.png';
import g from '../src/images/LT.webp';
import s from '../src/images/summary.png';
import v from '../src/images/vizsPNG.PNG';
import CustomNavbar from "./toggleBar";
const Projects = () => {
  return (
    <>
    <CustomNavbar/>
      <div className="header">
        <h2 style={{ color: "#fff" }}>Projects</h2>
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
                based on similarities to user tastes. It employs techniques like collaborative filtering, content-based filtering, and hybrid approaches 
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
              <div class="card-body" style={{paddingLeft: "20%", }}>
                <h5 class="card-title" style={{color: "red"}}>Language Translation using Encoder Decoder</h5>
                <p class="card-text" >
                A language translation model translates text from Urdu to English using an encoder-decoder sequence-to-sequence (seq2seq) architecture. 
                The encoder processes the input Urdu text, creating a context vector. This vector captures the input's meaning, which the decoder uses to
                 generate English translations one word at a time. Training involves minimizing discrepancies between predicted and actual translations using 
                 aligned Urdu-English sentence pairs. The model's effectiveness hinges on its ability to capture context and semantics, facilitated by recurrent
                  neural networks or transformer models. It helps bridge language barriers and facilitates cross-linguistic communication.
                </p>
                <p class="card-text">
                  <small class="text-muted">Flutter - Firebase - Provider - Flask - Transformers - Statical Modeling </small>
                </p>
              </div>
              <a href="https://github.com/Wasiue03/linguotech"class="btn btn-danger" target="_blank" rel="noopener noreferrer" style={{marginLeft: "30%"}}>
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
                <h5 class="card-title" style={{color: "red"}}>Text Summarizaton Using MBert</h5>
                <p class="card-text" >
                Text summarization using mBERT, a multilingual language model, involves condensing large texts or documents into concise summaries while preserving key information. In English, this process entails leveraging mBERT's understanding of the language to generate summaries that capture the main points of the original text. Similarly, in Urdu, mBERT is used to analyze and summarize text in the same manner, facilitating efficient comprehension in the Urdu language.

Additionally, mBERT can be utilized for website summarization through web scraping. This involves extracting content from web pages in English, Urdu, or multiple languages, and then employing mBERT to generate brief summaries of the extracted text. By harnessing mBERT's multilingual capabilities, website content can be summarized effectively, aiding users in quickly grasping the essence of the information presented on websites across various languages.
                </p>
                <p class="card-text">
                  <small class="text-muted">Flutter - Dart - Google API - Flask - Firebase </small>
                </p>
              </div>
              <a href="https://github.com/Wasiue03/linguotech"class="btn btn-danger" target="_blank" rel="noopener noreferrer" style={{marginLeft: "20%"}}>
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
                <h5 class="card-title"style={{color: "red"}}>Tableau Visualization Dashboards</h5>
                <p class="card-text">
                Tableau dashboards offer insightful visualizations across varied datasets. Superstores dashboards track sales and inventory, aiding in performance analysis. Customer segmentation dashboards categorize customers for targeted strategies. Gaming dashboards analyze player behavior and performance metrics, optimizing gaming experiences. With Tableau's intuitive interface, users can explore data effortlessly and make informed decisions swiftly.
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
                <h5 class="card-title"style={{color: "red"}}>Sentiment Analysis On Tweets</h5>
                <p class="card-text">
                In this sentiment analysis project using NLP, the goal is to create a machine learning model capable of accurately categorizing text into positive, negative, or neutral sentiments. The project involves data preprocessing, 
                tokenization, feature extraction, and model training using techniques like Bag-of-Words, TF-IDF, or word embeddings. 
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
                <h4 class="card-title"style={{color: "red"}}>Data Analysis</h4>
                <h5>Data:  Supply Chain</h5>
                <p class="card-text">
                This data analysis project involves exploring and examining a dataset to extract meaningful insights and patterns. It includes tasks like data cleaning, visualization, statistical analysis, and hypothesis testing. The project showcases the ability to work with real-world data and draw valuable conclusions, making it a valuable skill in the field of data science
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
                <h5 class="card-title"style={{color: "red"}}>Statistical Analysis</h5>
                <p class="card-text">
                In this statistical analysis project using Python, we aim to explore and analyze a dataset using libraries like Pandas, NumPy. Tasks include data cleaning, descriptive statistics,
                  Seaborn. The project showcases the ability to apply statistical concepts and Python programming skills to gain insights from data, making it a valuable addition to any data analysis portfolio.
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
