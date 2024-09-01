import React from "react";
import web from "../src/images/ProfileMe.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import dp from '../src/images/profile-pic.png';
import CustomNavbar from "./toggleBar";

const HomePage = () => {
  return (
    <>
      <CustomNavbar />

      <Common name="Hi! I'm Abdul Wasiue" imgsrc={web} visit="/projects" btnname="Doowload CV" />

      
      
      <section id="kubar-project" className="kubar-section" style={{ padding: "40px 0", backgroundColor: "#333", color: "#fff", display: 'flex', justifyContent: 'center' }}>
        <div className="card" style={{ maxWidth: '800px', width: '100%', backgroundColor: '#444', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.3)', padding: '20px', textAlign: 'justify' }}>
          <div>
            <h2 style={{ color: "#fff", marginBottom: '20px' }}>Recommendation System for Cloud Cost Optimization</h2>
            <p style={{ color: "#ddd", lineHeight: "1.8", marginBottom: '20px' }}>
              <strong>Overview:</strong> The Recommendation System for Cloud Cost Optimization was developed to address the challenge of managing cloud resources efficiently and reducing operational costs. With the rapid growth in cloud services, organizations faced difficulties in optimizing resource allocation, which led to inflated costs and inefficiencies. The project aimed to create a solution that dynamically adjusts cloud resource usage based on real-time needs, thereby reducing unnecessary expenses and improving overall resource management.
            </p>
            <p style={{ color: "#ddd", lineHeight: "1.8", marginBottom: '20px' }}>
              <strong>Problem Statement:</strong> Many organizations struggle with inefficient cloud resource allocation due to the complexity and scale of managing vast amounts of usage data. This inefficiency results in increased operational costs and underutilized resources. The primary challenge was to develop a system that could intelligently recommend adjustments to resource allocation in real-time, ensuring cost-effectiveness and optimal usage.
            </p>
            <p style={{ color: "#ddd", lineHeight: "1.8", marginBottom: '20px' }}>
              <strong>Solution:</strong> We designed a recommendation system that utilized advanced algorithms and real-time data processing to optimize cloud resource utilization. Working closely with cross-functional teams, we implemented data pipelines using Apache Kafka, developed recommendation algorithms with XGBoost and deep learning models, and automated the deployment process with Kubeflow Pipelines and KServe. This collaborative effort led to significant improvements in resource management and cost reduction.
            </p>
            <p style={{ color: "#ddd", lineHeight: "1.8", marginBottom: '20px' }}>
              <strong>Impact:</strong> The system achieved substantial cost savings by enhancing cloud resource allocation and reducing operational expenses. The solution not only improved the efficiency of resource usage but also demonstrated the ability to handle large-scale data processing challenges. This project highlighted the importance of integrating advanced machine learning techniques with robust data processing infrastructure.
            </p>
            <p style={{ color: "#ddd", lineHeight: "1.8" }}>
              <strong>Technical Solution:</strong> The project leveraged Apache Kafka for efficient data ingestion and storage, XGBoost and deep learning models for recommendation algorithms, and Kubeflow Pipelines with KServe for automated model deployment and real-time inference. These technologies collectively addressed the problem of cloud resource inefficiency and enabled a scalable, cost-effective solution.
            </p>
            <p style={{ color: "#ddd", lineHeight: "1.8" }}>
              <strong>Skills and Technologies Used:</strong> Apache Kafka, XGBoost, Deep Learning, Kubeflow Pipelines, KServe, Kubernetes, Python, Redis.
            </p>
          </div>
        </div>
      </section>

      {/* Additional sections such as Education, Experience, and Skills can be added here */}
    </>
  );
};

export default HomePage;
