import React from "react";
import CustomNavbar from "./toggleBar";
import { FaCloud, FaRobot, FaDatabase, FaChartLine, FaCode } from "react-icons/fa";

const WorkExposure = () => {
  return (
    <>
      <CustomNavbar />
      <section id="work-exposure" style={{
        padding: "80px 20px",
        background: "linear-gradient(to bottom,rgb(5, 5, 5) 0%,rgb(7, 7, 7) 100%)",
        color: "#2c3e50"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "60px",
            textAlign: "center",
            position: "relative"
          }}>
            Professional Experience
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#3498db',
              borderRadius: '2px'
            }}></span>
          </h1>

          {/* Kubar.io Experience */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            padding: "30px",
            marginBottom: "40px",
            transition: "transform 0.3s ease",
            borderLeft: "4px solid #3498db"
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <div style={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(52, 152, 219, 0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "20px",
                flexShrink: 0
              }}>
                <FaCloud style={{ fontSize: "1.5rem", color: "#3498db" }} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: "600", margin: 0 }}>Data Scientist</h2>
                <h3 style={{ fontSize: "1.2rem", color: "#3498db", margin: "5px 0 0 0" }}>Kubar.io</h3>
                <p style={{ color: "#7f8c8d", margin: "5px 0 0 0" }}>March 2024 – July 2024 | Remote</p>
              </div>
            </div>
            <ul style={{
              paddingLeft: "20px",
              lineHeight: "1.8",
              color: "#555",
              marginTop: "20px"
            }}>
              <li>Implemented <strong>Kubeflow pipelines</strong> for seamless data ingestion, model training, and deployment on <strong>Azure AKS</strong></li>
              <li>Built <strong>Apache Kafka</strong> pipelines for real-time data integration from Azure and Kubernetes metrics</li>
              <li>Applied <strong>time series forecasting</strong> techniques that achieved significant cloud cost savings</li>
              <li>Collaborated cross-functionally to streamline ML workflows, reducing deployment time by <strong>30%</strong></li>
              <li>Utilized <strong>KServe</strong> for efficient model inference and <strong>MongoDB/Redis</strong> for data storage</li>
            </ul>
          </div>

          {/* Internee.PK Experience */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            padding: "30px",
            marginBottom: "40px",
            transition: "transform 0.3s ease",
            borderLeft: "4px solid #2ecc71"
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <div style={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(46, 204, 113, 0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "20px",
                flexShrink: 0
              }}>
                <FaDatabase style={{ fontSize: "1.5rem", color: "#2ecc71" }} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: "600", margin: 0 }}>Data Scientist Intern</h2>
                <h3 style={{ fontSize: "1.2rem", color: "#2ecc71", margin: "5px 0 0 0" }}>Internee.PK</h3>
                <p style={{ color: "#7f8c8d", margin: "5px 0 0 0" }}>December 2023 — February 2024 | Remote</p>
              </div>
            </div>
            <ul style={{
              paddingLeft: "20px",
              lineHeight: "1.8",
              color: "#555",
              marginTop: "20px"
            }}>
              <li>Developed <strong>web scraping</strong> solutions to gather and process large-scale datasets</li>
              <li>Performed comprehensive <strong>Exploratory Data Analysis (EDA)</strong> to uncover business insights</li>
              <li>Implemented <strong>feature engineering</strong> techniques to enhance model performance</li>
              <li>Trained and optimized machine learning models on large corpus datasets</li>
              <li>Created data visualization dashboards to communicate findings to stakeholders</li>
            </ul>
          </div>

          {/* Dexplat Experience */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            padding: "30px",
            transition: "transform 0.3s ease",
            borderLeft: "4px solid #9b59b6"
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <div style={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(155, 89, 182, 0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "20px",
                flexShrink: 0
              }}>
                <FaRobot style={{ fontSize: "1.5rem", color: "#9b59b6" }} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: "600", margin: 0 }}>Software Developer Intern</h2>
                <h3 style={{ fontSize: "1.2rem", color: "#9b59b6", margin: "5px 0 0 0" }}>Dexplat</h3>
                <p style={{ color: "#7f8c8d", margin: "5px 0 0 0" }}>June 2023 — October 2023 | Remote</p>
              </div>
            </div>
            <ul style={{
              paddingLeft: "20px",
              lineHeight: "1.8",
              color: "#555",
              marginTop: "20px"
            }}>
              <li>Developed AI chatbots using <strong>LangChain</strong> and <strong>RAG</strong> architectures</li>
              <li>Built cross-platform mobile apps with <strong>Flutter</strong> and <strong>Firebase</strong></li>
              <li>Integrated machine learning models for real-time personalized recommendations</li>
              <li>Collaborated with clients to customize solutions for specific business needs</li>
              <li>Improved customer engagement metrics through AI-driven interactions</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExposure;