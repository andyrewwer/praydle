import { render, screen } from '@testing-library/react';
import InstructionContent from './InstructionContent';

test('renders learn react link', () => {
  render(<InstructionContent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
