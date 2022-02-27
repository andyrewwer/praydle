import {ANSWER_TYPE, ANIMATION_TYPE} from '../utils/Enums';
import {Tile} from '../model/Tile';
import {check_word} from '../utils/short_words.js'
export const ENTER_KEY = 13;
export const BACKSPACE_KEY = 8;
// TODO multiple answers, recommended max 6 letters
const answers = [{word: 'GRACE'}]

class GameService {

  removeLastItem(state) {
    const _current_row = state.current_row
    const list = state.rows;
    list[_current_row] = list[_current_row].slice(0, -1);
    return {rows: list};
  }

  rowIsComplete(row) {
    return row.length === this.getTodaysAnswer().length
  }

  wordIsValid(row) {
    let word = '';
    for (let i = 0; i < row.length; i++) {
      word += row[i].letter
    }
    let fact = check_word(word)
    return fact
  }

  _countsInSet(row) {
    const counts = {};
    row.forEach(function (x) { counts[x] = (counts[x] || 0) + 1;});
    return counts
  }

  getTodaysAnswer() {
    return answers[0].word;
  }

  checkRowValidity(row) {
    let current_answer = this.getTodaysAnswer();
    let remaining_letters_in_guess = [];
    let remaining_letters_in_answer = [];
    for (let i = 0; i < row.length; i ++) {
      if (current_answer[i] === row[i].letter) {
        row[i].nextStatus = ANSWER_TYPE.CORRECT;
        continue;
      }
      remaining_letters_in_guess.push({letter: row[i].letter, index: i})
      remaining_letters_in_answer.push(current_answer[i]);
    }

    for (let i = 0; i < remaining_letters_in_guess.length; i ++) {
      const index = remaining_letters_in_answer.indexOf(remaining_letters_in_guess[i].letter);
      if (index > -1) {
        row[remaining_letters_in_guess[i].index].nextStatus = ANSWER_TYPE.PRESENT;
        remaining_letters_in_answer.splice(index, 1);
        continue
      }
      row[remaining_letters_in_guess[i].index].nextStatus = ANSWER_TYPE.ABSENT;
    }
  }

  updateKeys(row, keys) {
    for (let i = 0; i < row.length; i ++) {
      if (keys[row[i].letter] === 'none') {
        keys[row[i].letter] = row[i].nextStatus
      }
      if (keys[row[i].letter] === ANSWER_TYPE.PRESENT && row[i].nextStatus === ANSWER_TYPE.CORRECT) {
        keys[row[i].letter] = row[i].nextStatus
      }
    }
  }

  startFlipAnimation(list, row, i, current_row) {
    row[i].animation = ANIMATION_TYPE.FLIP_IN;
    list[current_row] = row;
    return {rows: list}
  }

  continueFlipAnimationAndSetStatus(list, row, i, current_row) {
    row[i].animation = ANIMATION_TYPE.FLIP_OUT;
    row[i].status = row[i].nextStatus;
    list[current_row] = row;
    return {rows: list}
  }

  rowIsCorrect(row) {
    return row[0].status === ANSWER_TYPE.CORRECT && row[1].status === ANSWER_TYPE.CORRECT && row[2].status === ANSWER_TYPE.CORRECT
  }

  performBounceAnimation(list, row, j, current_row) {
    row[j].animation = ANIMATION_TYPE.BOUNCE;
    list[current_row] = row;
    return {rows: list}
  }

  performShakeAnimation(list, current_row) {
    list[current_row] = ANIMATION_TYPE.SHAKE;
    return ({animations: list});
  }

  addItemToRow(list, _current_row, letter) {
    list[_current_row] = list[_current_row].concat(new Tile(letter))
    return {rows: list}
  }
}

export {GameService};
