import { render, screen } from '@testing-library/react';
import PuzzleContent from './PuzzleContent';

test('renders learn react link', () => {
  render(<PuzzleContent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
