// src/components/Product/ProductList.test.tsx
//import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProductList from './ProductList';

test('renders product list', async () => {
  render(<ProductList />);
  const productElements = await screen.findAllByRole('heading');
  expect(productElements.length).toBeGreaterThan(0);
});
