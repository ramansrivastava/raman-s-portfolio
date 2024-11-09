// src/components/Interests.js
import React from 'react';
import './Interests.css'; // Assuming you will add the corresponding styles here

const Interests = () => {
  return (
    <section id="interests" className="my-5 py-5">
      <h2 className="text-center text-primary mb-4">Interests</h2>
      <div className="interest-list">
        {/* Interest 1 */}
        <div className="interest-card">
          <h3 className="interest-title">UI/UX Design</h3>
        </div>

        {/* Interest 2 */}
        <div className="interest-card">
          <h3 className="interest-title">Frontend Development</h3>
        </div>

        {/* Interest 3 */}
        <div className="interest-card">
          <h3 className="interest-title">Boxing</h3>
        </div>

        {/* Interest 4 */}
        <div className="interest-card">
          <h3 className="interest-title">Traveling</h3>
        </div>
      </div>
    </section>
  );
};

export default Interests;
