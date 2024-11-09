// src/components/Contact.js
import React from 'react';
import './contact.css'
const Contact = () => {
  return (
    <section id="contact" className="text-center my-4">
      <h2 className="text-primary">Get in Touch</h2>
      <p>I’m open to new opportunities; feel free to reach out!</p>
      
      <p>Find me everywhere:</p>
      
      

      <p>
        <a href="mailto:your-email@example.com" className="text-info">
          Email: ramancode4life@gmail.com
        </a>
      </p>

      <p>
        <a href="https://www.linkedin.com/in/jyotirmaan-srivastava-6335b722b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-info" target="_blank" rel="noopener noreferrer">
          LinkedIn: Jyotirmaan-Srivastava
        </a>
      </p>
    </section>
  );
};

export default Contact;
