import { render, screen } from '@testing-library/react';
import StatisticsContent from './StatisticsContent';

test('renders learn react link', () => {
  render(<StatisticsContent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
