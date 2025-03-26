import React from "react";
import CustomNavbar from "./toggleBar";
import { FaPython, FaDatabase, FaChartLine, FaRobot, FaCloud } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiApachekafka, SiKubernetes, SiDocker } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: <FaRobot className="skill-icon" />,
      skills: [
        "Supervised Learning", "Unsupervised Learning", "Deep Learning",
        "Natural Language Processing", "Computer Vision", "Time Series Forecasting"
      ],
      color: "#e74c3c"
    },
    {
      title: "Data Engineering",
      icon: <FaDatabase className="skill-icon" />,
      skills: [
        "Apache Kafka", "Spark", "ETL Pipelines",
        "Data Warehousing", "Feature Engineering", "Airflow"
      ],
      color: "#3498db"
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="skill-icon" />,
      skills: [
        "AWS/GCP", "Docker", "Kubernetes",
        "CI/CD Pipelines", "Terraform", "MLOps"
      ],
      color: "#9b59b6"
    },
    {
      title: "Programming",
      icon: <FaPython className="skill-icon" />,
      skills: [
        "Python", "SQL", "PySpark",
        "R", "JavaScript", "Bash"
      ],
      color: "#2ecc71"
    },
    {
      title: "Data Visualization",
      icon: <FaChartLine className="skill-icon" />,
      skills: [
        "Tableau", "Power BI", "Matplotlib",
        "Seaborn", "Plotly", "D3.js"
      ],
      color: "#f39c12"
    },
    {
      title: "Frameworks",
      icon: <SiTensorflow className="skill-icon" />,
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn",
        "HuggingFace", "LangChain", "Keras"
      ],
      color: "#1abc9c"
    }
  ];

  return (
    <>
      <CustomNavbar />
      <section id="skills" style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #2c3e50 0%, #1a1a1a 100%)",
        color: "#fff"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "20px",
            textAlign: "center",
            position: "relative"
          }}>
            Technical Expertise
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

          <p style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 60px",
            textAlign: "center",
            color: "#ecf0f1"
          }}>
            I combine cutting-edge technical skills with business acumen to deliver data-driven solutions that create real impact.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {skillCategories.map((category, index) => (
              <div key={index} style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "10px",
                padding: "30px",
                borderTop: `4px solid ${category.color}`,
                transition: "all 0.3s ease",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px"
                }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: `${category.color}20`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "15px"
                  }}>
                    {React.cloneElement(category.icon, { 
                      style: { fontSize: "1.5rem", color: category.color } 
                    })}
                  </div>
                  <h3 style={{ 
                    fontSize: "1.5rem",
                    margin: 0,
                    color: "#fff"
                  }}>
                    {category.title}
                  </h3>
                </div>
                <ul style={{
                  paddingLeft: "20px",
                  margin: 0,
                  listStyleType: "none"
                }}>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} style={{
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <span style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: category.color,
                        borderRadius: "50%",
                        marginRight: "10px"
                      }}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;