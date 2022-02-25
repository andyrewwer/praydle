import {ANSWER_TYPE, ANIMATION_TYPE} from '../utils/Enums';
import {Tile} from '../model/Tile';

export const ENTER_KEY = 13;
export const BACKSPACE_KEY = 8;
// TODO multiple answers
const answers = ['GOD']

class GameService {

  removeLastItem(state) {
    const _current_row = state.current_row
    const list = state.rows;
    list[_current_row] = list[_current_row].slice(0, -1);
    return {rows: list};
  }

  currentRowIsComplete(state) {
    return state.rows[state.current_row].length === 3
  }

  _countsInSet(row) {
    const counts = {};
    row.forEach(function (x) { counts[x] = (counts[x] || 0) + 1;});
    return counts

  }

  setTileStatus(row, index) {
    let current_answer = answers[0];

    // TODO BUG IF YOU CORRECT ALSO PRESENT
    if (current_answer[index] === row[index].letter) {
      return ANSWER_TYPE.CORRECT;
    }
    if (current_answer.indexOf(row[index].letter) > -1 ) {
      console.log('present')
      return ANSWER_TYPE.PRESENT;
    }
    return ANSWER_TYPE.ABSENT;
  }

  startFlipAnimation(list, row, i, current_row) {
    row[i].animation = ANIMATION_TYPE.FLIP_IN;
    list[current_row] = row;
    return {rows: list}
  }

  continueFlipAnimationAndSetStatus(list, row, i, current_row) {
    row[i].animation = ANIMATION_TYPE.FLIP_OUT;
    row[i].status = this.setTileStatus(row, i);
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

// TODO consider do we need "idle" state
