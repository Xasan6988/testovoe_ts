import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders loader', () => {
  render(<Loader />);
  const text = screen.getByText(/поиск.../i);
  expect(text).toBeInTheDocument();
});
