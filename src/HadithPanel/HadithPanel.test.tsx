import React from 'react';
import { render, screen } from '@testing-library/react';
import HadithPanel from './HadithPanel';

test('renders learn react link', () => {
  render(<HadithPanel />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
