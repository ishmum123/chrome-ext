import React from 'react';
import { render, screen } from '@testing-library/react';
import NameOfAllah from './NameOfAllah';

test('renders learn react link', () => {
  render(<NameOfAllah />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
