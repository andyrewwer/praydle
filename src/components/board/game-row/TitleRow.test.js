/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import GameRow from './GameRow.js';

test('render', () => {
  render(<GameRow/>)

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  expect(screen.queryByTestId('player-turn-action-section')).not.toBeInTheDocument();
  expect(screen.queryByTestId('claim-token-section')).not.toBeInTheDocument();
});
