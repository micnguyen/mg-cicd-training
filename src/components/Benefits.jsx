import React from 'react';
import './Benefits.css';

function Benefits() {
  const benefits = [
    "Faster 23232 of features to production",
    "Automated testing reduces human error",
    "Immediate feedback on code quality",
    "Consistent and repeatable deployment process"
  ];

  return (
    <div className="benefits-container" data-testid="benefits-container">
      <p className="benefits-intro">
        Continuous Integration and Continuous Deployment streamlines software development by:
      </p>
      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index} className="benefit-item">{benefit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Benefits;
