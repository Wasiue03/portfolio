import React from "react";
import CustomNavbar from "./toggleBar";

const WorkExposure = () => {
  return (
    <>
      <CustomNavbar />
      <section id="work-exposure" style={{ padding: "40px 0", backgroundColor: "#f7f7f7", color: "#333", textAlign: "center" }}>
        <div className="container">
          <h1 className="mb-5" style={{ fontSize: "36px", fontWeight: "bold" }}>Work Exposure</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Data Scientist - Kubar.io</h2>
              <p style={{ marginBottom: "10px" }}><strong>March 2024 – July 2024 | Remote</strong></p>
              <p style={{ textAlign: "justify" }}>
                Responsible for implementing Kubeflow pipelines for seamless data ingestion, model training, and deployment on Azure AKS, utilizing KServe for efficient model inference. Implemented Apache Kafka pipelines for real-time data integration from Azure and Kubernetes metrics using Python, ensuring reliable data flow into MongoDB and Redis for advanced preprocessing and storage. Applied advanced time series forecasting techniques to optimize resource utilization, achieving significant cost savings in cloud computation. Collaborated closely with data engineers, product managers, and stakeholders to streamline ML workflows, resulting in a 30% reduction in deployment time and improved alignment with business objectives.
              </p>
            </div>

            <div className="col-md-8 mt-5">
              <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Data Scientist / Intern - Internee.PK</h2>
              <p style={{ marginBottom: "10px" }}><strong>December 2023 — February 2024 | Remote</strong></p>
              <p style={{ textAlign: "justify" }}>
                Conducted advanced web scraping techniques to gather comprehensive and relevant datasets, including relevant web pages, and trained the model on large corpus datasets. Performed detailed Exploratory Data Analysis (EDA) to extract actionable insights and identify underlying patterns, supporting informed decision-making. Enhanced predictive models by applying advanced feature engineering strategies, ensuring accurate outcome forecasts aligned with project goals.
              </p>
            </div>

            <div className="col-md-8 mt-5">
              <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Software Developer / Intern - Dexplat</h2>
              <p style={{ marginBottom: "10px" }}><strong>June 2023 — October 2023 | Remote</strong></p>
              <p style={{ textAlign: "justify" }}>
                Developed and optimized recommendation algorithms and AI chatbots using LangChain and Retrieval-Augmented Generation (RAG), enhancing user interactions and automating processes. Built cross-platform mobile apps with Flutter and Firebase, integrating machine learning models to provide real-time, personalized customer service and maintain a consistent user experience. Collaborated closely with clients to tailor AI chatbot functionalities to specific business needs, resulting in improved customer engagement, increased operational efficiency, and enhanced user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExposure;
