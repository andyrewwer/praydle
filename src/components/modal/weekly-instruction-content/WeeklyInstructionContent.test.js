import { render, screen } from '@testing-library/react';
import WeeklyInstructionContent from './WeeklyInstructionContent';

test('renders learn react link', () => {
  render(<WeeklyInstructionContent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
