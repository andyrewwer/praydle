/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import HeaderSection from './HeaderSection.js';

test('render', () => {
  render(<HeaderSection/>)

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  expect(screen.queryByTestId('player-turn-action-section')).not.toBeInTheDocument();
  expect(screen.queryByTestId('claim-token-section')).not.toBeInTheDocument();
});
