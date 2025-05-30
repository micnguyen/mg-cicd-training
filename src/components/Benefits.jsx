import React from 'react';
import './Benefits.css';

function Benefits() {
  const benefits = [
    "Fasterererer delivery of features to production",
    "Automated testing reduces human error",
    "Reduces bugs",
    "Immediate feedback on code quality",
    "Repeatable & consistent deployment process",
    "Just awesome software",
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
