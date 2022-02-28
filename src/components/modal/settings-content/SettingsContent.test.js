import { render, screen } from '@testing-library/react';
import SettingsContent from './SettingsContent';

test('renders learn react link', () => {
  render(<SettingsContent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
