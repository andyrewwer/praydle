import { render, screen } from '@testing-library/react';
import BibleContent from './BibleContent';

test('renders learn react link', () => {
  render(<BibleContent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
