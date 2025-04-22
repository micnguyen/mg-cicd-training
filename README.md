# CI/CD Benefits Website

A simple React website showcasing the benefits of Continuous Integration and Continuous Deployment.

## Project Overview
This project demonstrates:
- A clean, minimal React app highlighting CI/CD benefits
- Unit testing with React Testing Library
- GitHub Actions integration for CI/CD

## Getting Started

1. Clone the repository
2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm start
```

## Testing

Run tests with:
```
npm test
```

## CI/CD Pipeline

This project includes a GitHub Actions workflow that:
- Runs automatically on Pull Requests targeting the main branch
- Executes all unit tests
- Prevents merging if tests fail
- Allows merging if tests pass

The configuration file is located at `.github/workflows/test-pr.yml`

## Project Structure

- `src/App.jsx` - Main application component
- `src/components/Benefits.jsx` - Component displaying CI/CD benefits
- `src/components/Benefits.test.jsx` - Unit tests for the Benefits component
