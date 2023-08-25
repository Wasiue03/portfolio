import React from "react";
import web from "../src/images/home.jpeg";
import Common from "./Common";

const teamMembers = [
  {
    name: "John Doe",
    role: "Data Scientist",
    description: "Passionate about exploring data and finding insights.",
    image: "url_for_john_doe_image.jpg", // Replace with actual image URL
  },
  {
    name: "Jane Smith",
    role: "Flutter Developer",
    description: "Creating amazing cross-platform apps using Flutter.",
    image: "url_for_jane_smith_image.jpg", // Replace with actual image URL
  },
  {
    name: "Michael Johnson",
    role: "Web Developer",
    description: "Crafting responsive and user-friendly websites.",
    image: "url_for_michael_johnson_image.jpg", // Replace with actual image URL
  },
];

const HomePage = () => {
  return (
    <>
      <Common name="Data Driven Agents" imgsrc={web} visit="/service" btnname="Get Started" />

      {/* Slide Down Section */}
      <section id="team" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>Our Team</h2>
            </div>
          </div>
          <div className="row mt-4">
            {teamMembers.map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="team-member">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-2">
        <p>&copy; 2023 Your Data Driven Agents. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
