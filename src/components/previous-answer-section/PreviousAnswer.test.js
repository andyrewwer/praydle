import { render, screen } from '@testing-library/react';
import PreviousAnswer from './PreviousAnswer';

test('renders learn react link', () => {
  render(<PreviousAnswer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
