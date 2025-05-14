import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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

    expect(screen.getByText(/Faster delivery of features to production/)).toBeInTheDocument();
    expect(screen.getByText(/Automated testing reduces human error/)).toBeInTheDocument();
    expect(screen.getByText(/Immediate feedback on code quality/)).toBeInTheDocument();
    expect(screen.getByText(/Repeatable & consistent deployment process/)).toBeInTheDocument();
    expect(screen.getByText(/Just awesome software/)).toBeInTheDocument();
    expect(screen.getByText(/Reduces bugs/)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Benefits />);
    expect(asFragment()).toMatchSnapshot();
  });
});