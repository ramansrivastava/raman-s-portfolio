// src/components/About.js
import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Add your image in the src/assets folder

const About = () => {
  return (
    <section id="about" className="about-section container my-5">
      <div className="row align-items-center">
        {/* Left column for "About Me" text */}
        <div className="col-md-6 about-text">
          <h2>About Me</h2>
          <p>
          I'm a passionate and dedicated 4th-year BTech student specializing in CSE CORE at SRM UNIVERSITY, with a keen interest in Web Development and Artificial Intelligence. Throughout my academic journey, I’ve worked on several projects that blend my love for coding with my desire to create innovative, user-centric applications.

          </p>
          <p>
          With solid experience in front-end and back-end web development technologies, I’m continuously exploring how AI can enhance the development process and improve user experiences. My goal is to combine my technical skills with my creativity to build smart, efficient, and scalable solutions.
          </p>
        </div>

        {/* Right column for image */}
        <div className="col-md-6 text-center">
          <img src={profileImage} alt="Jyotirmaan Srivastava" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
