// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Online Shopping/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders products', () => {
  render(<App />);
  const product1 = screen.getByText(/Product 1/i);
  const product2 = screen.getByText(/Product 2/i);
  expect(product1).toBeInTheDocument();
  expect(product2).toBeInTheDocument();
});

test('renders checkout form', () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const addressInput = screen.getByPlaceholderText(/Address/i);
  expect(nameInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();
});




