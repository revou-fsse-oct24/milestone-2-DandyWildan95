import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';  // Make sure this is imported
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



