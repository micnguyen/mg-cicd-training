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
    expect(screen.getByText(/Faster delivery of features/)).toBeInTheDocument();
    expect(screen.getByText(/Automated testing/)).toBeInTheDocument();
    expect(screen.getByText(/Immediate feedback/)).toBeInTheDocument();
    expect(screen.getByText(/Repeatable & consistent deployment process/)).toBeInTheDocument();
    expect(screen.getByText(/Just awesome22 software/)).toBeInTheDocument();
  });
});