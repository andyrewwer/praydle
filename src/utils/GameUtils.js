import {ENTER_KEY, BACKSPACE_KEY} from '../service/GameService';

export const createEmptyKeyboard = () => {
  return {A: 'none', B: 'none', C: 'none', D: 'none', E: 'none', F: 'none', G: 'none',
          H: 'none', I: 'none', J: 'none', K: 'none', L: 'none', M: 'none', N: 'none',
          O: 'none', P: 'none', Q: 'none', R: 'none', S: 'none', T: 'none', U: 'none',
          V: 'none', W: 'none', X: 'none', Y: 'none', Z: 'none'}
}


export const handleKeyDown = (lock_condition, removeCallback, enterCallback, keyPressedCallback, e) => {
  if (lock_condition()) {
    return
  }
  if (e.keyCode === BACKSPACE_KEY) {
    removeCallback();
  } else if (e.keyCode === ENTER_KEY) {
    enterCallback();
    // check if letter
  } else if (String.fromCharCode(e.keyCode).toUpperCase() !== String.fromCharCode(e.keyCode).toLowerCase()) {
    keyPressedCallback(String.fromCharCode(e.keyCode).toUpperCase());
  }
}
