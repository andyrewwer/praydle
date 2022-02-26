import { render, screen } from '@testing-library/react';
import ModalContainer from './ModalContainer';

test('renders learn react link', () => {
  render(<ModalContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
