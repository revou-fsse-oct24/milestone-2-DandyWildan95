import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this import is present
import App from './App';

test('renders Online Tobacco Store heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Online Tobacco Store/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders ProductList component', () => {
  render(<App />);
  const productListElement = screen.getByText(/Cigarette 1/i);
  expect(productListElement).toBeInTheDocument();
});




