import React from 'react';
import './Benefits.css';

function Benefits() {
  const benefits = [
    "Faster delivery of features to production",
    "Another Entry woops some hello",
    "Automated testing reduces human error",
    "Immediate feedback on code quality",
    "Repeatable & consistent deployment process",
    "Just awesome software",
    "Reduces bugs",
    "dasdsad",
    "Another Entry woops some hello",

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
