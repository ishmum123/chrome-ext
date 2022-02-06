import React from 'react';
import { render, screen } from '@testing-library/react';
import PrayerBar from './PrayerBar';

test('renders learn react link', () => {
  render(<PrayerBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
