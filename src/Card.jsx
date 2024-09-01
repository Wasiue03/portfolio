import React from "react";
import DS from "../src/images/data_analysis.png";
import ML from "../src/images/ML.png";
import NLP from "../src/images/nlp.png";
import deploy from "../src/images/deploy.png";
import cloud from "../src/images/cloud.png"; // Add cloud image
import spark from "../src/images/spark.png"; // Add spark image
import docker from "../src/images/docker.png"; // Add docker image
import RAG from "../src/images/RAG.jpeg"; // Add RAG image
import LangChain from "../src/images/langchain.png"; // Add LangChain image

const Card = () => {
  return (
    <>
      <div className="row">
        {[
          {
            img: spark,
            title: "Apache Kafka & Spark",
            text: "Expert in extracting information from big data using Apache Kafka and Spark for real-time data processing and analytics.",
          },
          {
            img: ML,
            title: "Machine Learning & Deep Learning",
            text: "Develop robust Machine Learning and Deep Learning models with high accuracy and reliable predictions.",
          },
          {
            img: NLP,
            title: "Natural Language Processing (NLP)",
            text: "Perform sentiment analysis, tokenization, part-of-speech tagging, and other NLP tasks with cutting-edge techniques.",
          },
          {
            img: deploy,
            title: "Deployment & Docker",
            text: "Deploy ML models using Docker, Kubernetes, and cloud platforms like AWS and Azure, ensuring scalability and reliability.",
          },
          {
            img: cloud,
            title: "Cloud Platforms",
            text: "Proficient with cloud platforms such as AWS, Azure, and Google Cloud for deploying scalable machine learning solutions.",
          },
          {
            img: docker,
            title: "DevOps & Docker",
            text: "Automate the deployment of ML models using Docker, ensuring efficient continuous integration and deployment.",
          },
          {
            img: RAG,
            title: "Retrieval-Augmented Generation (RAG)",
            text: "Enhance user interactions with AI chatbots using RAG techniques for better customer engagement and satisfaction.",
          },
          {
            img: LangChain,
            title: "LangChain & AI Chatbots",
            text: "Develop and optimize AI chatbots with LangChain, improving automation and personalized user experiences.",
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
