import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import dp from '../src/images/ProfileMe.png';
import CustomNavbar from "./toggleBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typed from "typed.js";

const HomePage = () => {
  // Initialize typed.js for animated typing effect
  useEffect(() => {
    const typed = new Typed('#typed-text', {
      strings: [
        "Machine Learning Engineer",
        "Data Scientist",
        "AI Developer",
        "Cloud Specialist"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Particles.js configuration
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <CustomNavbar />

      {/* Interactive Particles Background */}
      <div style={{ position: 'relative', zIndex: 0 }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#3498db",
              },
              links: {
                color: "#3498db",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />

        {/* Hero Section */}
        <section style={{
          position: 'relative',
          zIndex: 1,
          padding: "120px 20px",
          color: "#fff",
          textAlign: "center",
        }}>
          <div className="container" style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}>
            {/* Profile Image with Glow Effect */}
            <div style={{ 
              margin: "0 auto 30px", 
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "4px solid #fff",
              boxShadow: "0 0 20px rgba(52, 152, 219, 0.8)",
              overflow: "hidden",
              transition: "transform 0.3s ease"
            }} 
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img
                src={dp}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <h1 style={{ 
              fontSize: "2.8rem", 
              fontWeight: "700", 
              marginBottom: "15px",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Hi! I'm <span style={{ color: "#3498db" }}>Abdul Wasiue</span>
            </h1>

            <h2 style={{ 
              fontSize: "1.8rem", 
              fontWeight: "400", 
              marginBottom: "30px",
              minHeight: "60px"
            }}>
              <span id="typed-text"></span>
            </h2>

            <p style={{ 
              fontSize: "1.2rem", 
              maxWidth: "700px", 
              margin: "0 auto 40px",
              lineHeight: "1.6"
            }}>
              Building intelligent solutions that transform data into actionable insights.
              Specializing in machine learning pipelines, cloud deployment, and AI applications.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a 
                href="https://drive.google.com/file/d/13V-jTRrde0y0WSOo2QdVo1c49hka1-0m/view?usp=drive_link"
                style={{
                  padding: "14px 30px",
                  backgroundColor: "#3498db",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(52, 152, 219, 0.4)",
                  border: "2px solid #3498db"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#3498db';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#3498db';
                  e.target.style.color = '#fff';
                }}
              >
                Download CV
              </a>
              
              <NavLink 
                to="/contact"
                style={{
                  padding: "14px 30px",
                  backgroundColor: "transparent",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
                  border: "2px solid #fff"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#222';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#fff';
                }}
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </section>
      </div>

      {/* Expertise Section */}
<section className="expertise-section" style={{
  padding: '80px 20px',
  backgroundColor: '#f8f9fa',
  textAlign: 'center'
}}>
  <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h2 style={{ 
      fontSize: '2.5rem',
      marginBottom: '60px',
      color: '#2c3e50',
      position: 'relative',
      display: 'inline-block'
    }}>
      My Expertise
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
    </h2>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      textAlign: 'left'
    }}>
      {/* AI/ML Card */}
      <div style={{
        padding: '30px',
        borderRadius: '10px',
        background: '#fff',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          color: '#3498db'
        }}>
          <i className="fas fa-brain" style={{ fontSize: '2rem', marginRight: '15px' }}></i>
          <h3 style={{ margin: 0 }}>AI & Machine Learning</h3>
        </div>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
          <li>Natural Language Processing (NLP)</li>
          <li>Computer Vision & Image Recognition</li>
          <li>Time Series Forecasting</li>
          <li>Transformer Models (BERT, GPT)</li>
          <li>Recommendation Systems</li>
        </ul>
      </div>

      {/* Data Engineering Card */}
      <div style={{
        padding: '30px',
        borderRadius: '10px',
        background: '#fff',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          color: '#3498db'
        }}>
          <i className="fas fa-database" style={{ fontSize: '2rem', marginRight: '15px' }}></i>
          <h3 style={{ margin: 0 }}>Data Engineering</h3>
        </div>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
          <li>Real-time Data Pipelines (Kafka)</li>
          <li>ETL Processes & Data Warehousing</li>
          <li>Big Data Processing (Spark)</li>
          <li>Cloud Data Solutions (AWS/GCP)</li>
          <li>Feature Store Implementation</li>
        </ul>
      </div>

      {/* MLOps Card */}
      <div style={{
        padding: '30px',
        borderRadius: '10px',
        background: '#fff',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          color: '#3498db'
        }}>
          <i className="fas fa-rocket" style={{ fontSize: '2rem', marginRight: '15px' }}></i>
          <h3 style={{ margin: 0 }}>MLOps & Deployment</h3>
        </div>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
          <li>Containerization (Docker)</li>
          <li>Kubernetes Orchestration</li>
          <li>CI/CD Pipelines</li>
          <li>Model Monitoring & Serving</li>
          <li>Edge AI Deployment</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Approach Section */}
<section className="approach-section" style={{
  padding: '80px 20px',
  background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
  color: '#fff',
  textAlign: 'center'
}}>
  <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
    <h2 style={{ 
      fontSize: '2.5rem',
      marginBottom: '40px',
      position: 'relative',
      display: 'inline-block'
    }}>
      My Approach
      <span style={{
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '4px',
        backgroundColor: '#fff',
        borderRadius: '2px'
      }}></span>
    </h2>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      textAlign: 'center'
    }}>
      {/* Problem-Solving */}
      <div style={{ padding: '20px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px'
        }}>
          <i className="fas fa-lightbulb" style={{ fontSize: '2rem', color: '#fff' }}></i>
        </div>
        <h3 style={{ marginBottom: '15px' }}>Problem-First Mindset</h3>
        <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
          I begin by deeply understanding the business problem before designing technical solutions.
        </p>
      </div>

      {/* End-to-End */}
      <div style={{ padding: '20px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px'
        }}>
          <i className="fas fa-project-diagram" style={{ fontSize: '2rem', color: '#fff' }}></i>
        </div>
        <h3 style={{ marginBottom: '15px' }}>End-to-End Ownership</h3>
        <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
          From data collection to model deployment, I ensure solutions are production-ready.
        </p>
      </div>

      {/* Optimization */}
      <div style={{ padding: '20px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px'
        }}>
          <i className="fas fa-tachometer-alt" style={{ fontSize: '2rem', color: '#fff' }}></i>
        </div>
        <h3 style={{ marginBottom: '15px' }}>Performance Optimization</h3>
        <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
          Specializing in efficient models for resource-constrained environments.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer style={{
        padding: "40px 20px",
        backgroundColor: "#2c3e50",
        color: "#fff",
        textAlign: "center",
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com/Wasiue03" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px' }}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px' }}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:your.email@example.com" style={{ color: '#fff', fontSize: '24px' }}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Abdul Wasiue. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;