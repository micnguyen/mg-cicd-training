// src/components/Benefits.test.jsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Add this import
import Benefits from './Benefits';

describe('Benefits Component', () => {
  test('renders the benefits container', () => {
    render(<Benefits />);
    const benefitsContainer = screen.getByTestId('benefits-container');
    expect(benefitsContainer).toBeInTheDocument();
  });

  test('renders the benefits intro text', () => {
    render(<Benefits />);
    const introText = screen.getByText(/Continuous Integration and Continuous Deployment/i);
    expect(introText).toBeInTheDocument();
  });

  test('renders all benefit items', () => {
    render(<Benefits />);
    expect(screen.getByText(/Faster delivery of features/i)).toBeInTheDocument();
    expect(screen.getByText(/Automated testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Immediate feedback/i)).toBeInTheDocument();
    expect(screen.getByText(/Consistent and repeatable/i)).toBeInTheDocument();
  });
});