/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import GameTile from './GameTile.js';

test('render', () => {
  render(<GameTile/>)

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  expect(screen.queryByTestId('player-turn-action-section')).not.toBeInTheDocument();
  expect(screen.queryByTestId('claim-token-section')).not.toBeInTheDocument();
});
