import React from "react";
import web from "../src/images/ProfileMe.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import dp from '../src/images/ProfileMe.png'; // Profile Picture
import CustomNavbar from "./toggleBar";

const HomePage = () => {
  return (
    <>
      <CustomNavbar />

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
          <a href="https://github.com/Wasiue03/LLM-ChatBot" class="btn btn-danger mr-2" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          <a href="https://pypi.org/project/your-chatbot-package" class="btn btn-outline-danger" target="_blank" rel="noopener noreferrer">
            PyPI Package
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Top Section with Soft Gradient */}
      <section
        id="top-section"
        style={{
          padding: "100px 20px", 
          background: "linear-gradient(to right, #5b6e72, #a7b1b7)", // Soft gradient background
          color: "#fff", 
          textAlign: "center", 
          borderBottom: "2px solid #ddd", // Subtle border
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Profile Section with Styling */}
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <img
              src={dp} 
              alt="Profile" 
              style={{
                borderRadius: "50%", 
                width: "150px", 
                height: "150px", 
                objectFit: "cover", 
                border: "5px solid #fff", // White border for the profile image
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow to pop the image
              }}
            />
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "600", marginBottom: "20px" }}>
            Hi! I'm Abdul Wasiue
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#f5f5f5", marginBottom: "30px" }}>
            A passionate Data Scientist specializing in Machine Learning and AI-driven solutions.
          </p>
          <a 
            href="/Wasiue_DS_Resume.pdf"
            style={{
              padding: "12px 25px", 
              backgroundColor: "#3498db", 
              color: "#fff", 
              textDecoration: "none", 
              borderRadius: "5px", 
              fontWeight: "500", 
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about-section"
        style={{
          padding: "60px 20px", 
          backgroundColor: "#f9f9f9", 
          color: "#333", 
          textAlign: "center", 
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px", fontWeight: "600" }}>About Me</h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          I'm a passionate Data Scientist with expertise in Machine Learning, AI, and building scalable applications. I enjoy solving complex problems with data-driven insights and building innovative solutions that make a difference. My experience spans across multiple domains, from predictive modeling to cloud deployment.
        </p>
      </section>

     
      {/* Footer */}
      <footer
        style={{
          padding: "40px 20px", 
          backgroundColor: "#222", 
          color: "#fff", 
          textAlign: "center"
        }}
      >
        <p>&copy; 2025 Abdul Wasiue. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
