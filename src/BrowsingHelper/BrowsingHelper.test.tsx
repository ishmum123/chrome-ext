import React from 'react';
import { render, screen } from '@testing-library/react';
import BrowsingHelper from './BrowsingHelper';

test('renders learn react link', () => {
  render(<BrowsingHelper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
