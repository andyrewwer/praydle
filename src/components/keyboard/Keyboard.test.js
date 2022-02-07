/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import Keyboard from './Keyboard.js';

test('render', () => {
  render(<Keyboard/>)

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  expect(screen.queryByTestId('player-turn-action-section')).not.toBeInTheDocument();
  expect(screen.queryByTestId('claim-token-section')).not.toBeInTheDocument();
});
