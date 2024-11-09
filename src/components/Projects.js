// src/components/Projects.js
import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <section id="projects" className="my-5 py-5">
      <h2 className="text-center text-primary mb-4">Projects</h2>
      <div className="project-list">
        {/* Project Item 1 */}
        <div className="project-item">
          <h3 className="project-title">Expander-Gym</h3>
          <p className="project-description">
            Developed a gym website using React and Vite, providing a responsive platform for users to explore gym
            services, membership options, and fitness programs. Implemented dynamic features such as class
            schedules, trainer profiles, and membership sign-ups, ensuring an intuitive user experience. Leveraged Vite's
            fast build process for optimized performance and rapid development, resulting in a smooth and engaging
            interface.
          </p>
          <div className="project-actions">
            <a href="https://expander-gym.onrender.com/" className="btn btn-primary">View Work</a>
            <a href="https://github.com/ramansrivastava/Expander-Gym" className="btn btn-outline-primary">View Code</a>
          </div>
        </div>
        
        {/* Project Item 2 */}
        <div className="project-item">
          <h3 className="project-title">Weather App</h3>
          <p className="project-description">
            A weather forecasting app built with React and integrated with OpenWeather API to provide real-time weather updates,
            forecasts, and location-based weather information. Designed for simplicity and ease of use with a user-friendly
            interface and smooth interaction.
          </p>
          <div className="project-actions">
            <a href="https://weather-api-8w8o.onrender.com" className="btn btn-primary">View Work</a>
            <a href="https://github.com/ramansrivastava/weather-api" className="btn btn-outline-primary">View Code</a>
          </div>
        </div>

        {/* Project Item 3 */}
        <div className="project-item">
          <h3 className="project-title">Portfolio Website</h3>
          <p className="project-description">
            A personal portfolio website created to showcase my projects, skills, and experience. Built using React and hosted
            on GitHub Pages, it offers a responsive design, clean layout, and easy navigation to help visitors learn more about my work.
          </p>
          <div className="project-actions">
            <a href="#view-work" className="btn btn-primary">View Work</a>
            <a href="#view-code" className="btn btn-outline-primary">View Code</a>
          </div>
        </div>

        {/* Project Item 4 */}
        <div className="project-item">
          <h3 className="project-title">HarveIT</h3>
          <p className="project-description">
          Harveit is an agro-based trading platform designed to connect farmers with buyers, streamlining the process of trading agricultural products. The platform empowers farmers by providing them with an easy-to-use interface where they can list their products, view real-time market prices, and connect with potential buyers directly. By reducing intermediaries, Harveit ensures that farmers get better prices for their produce and helps buyers find fresh, high-quality agricultural products.
          </p>
          <div className="project-actions">
            <a href="https://ramansrivastava.github.io/HarveIT/" className="btn btn-primary">View Work</a>
            <a href="https://github.com/ramansrivastava/HarveIT" className="btn btn-outline-primary">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
