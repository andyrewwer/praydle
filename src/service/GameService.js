import {BUILDING_ICONS, WEAPON_ICONS, PEOPLE_ICONS, ANSWER_TYPE, ANIMATION_TYPE} from '../utils/Enums';
import {Icon} from '../model/Icon';

export const ENTER_KEY = 13;
export const BACKSPACE_KEY = 8;
const answers = [[BUILDING_ICONS.THREE, WEAPON_ICONS.FOUR, PEOPLE_ICONS.FIVE]]

class GameService {

  removeLastItem(state) {
    const _current_row = state.current_row
    const list = state.icons;
    list[_current_row] = list[_current_row].slice(0, -1);
    return {icons: list};
  }

  currentRowIsComplete(state) {
    return state.icons[state.current_row].length === 3
  }

  isIconInSolution(icon) {
    let answer = answers[0];
    let icons = [answer[0].iconName, answer[1].iconName, answer[2].iconName];
    let colors = [answer[0].color, answer[1].color, answer[2].color];
    if (icons.indexOf(icon.iconName) > -1) {
      return ANSWER_TYPE.CORRECT;
    }
    if (colors.indexOf(icon.color) > -1) {
      // TODO check if the "RIGHT" answer is not implemented
      // prevent duplicates also
      return ANSWER_TYPE.PRESENT;
    }
    return ANSWER_TYPE.ABSENT;
  }

  startFlipAnimation(list, row, i, current_row) {
    row[i].animation = ANIMATION_TYPE.FLIP_IN;
    list[current_row] = row;
    return {icons: list}
  }

  continueFlipAnimationAndSetStatus(list, row, i, current_row) {
    row[i].animation = ANIMATION_TYPE.FLIP_OUT;
    row[i].status = this.isIconInSolution(row[i]);
    list[current_row] = row;
    return {icons: list}
  }

  rowIsCorrect(row) {
    //TODO
    return row[0].status === ANSWER_TYPE.CORRECT && row[1].status === ANSWER_TYPE.CORRECT && row[2].status === ANSWER_TYPE.CORRECT
  }

  performBounceAnimation(list, row, j, current_row) {
    row[j].animation = ANIMATION_TYPE.BOUNCE;
    list[current_row] = row;
    return {icons: list}
  }

  performShakeAnimation(list, current_row) {
    list[current_row] = ANIMATION_TYPE.SHAKE;
    return ({animations: list});
  }

  addItemToRow(list, _current_row, icon) {
    list[_current_row] = list[_current_row].concat(new Icon(icon.iconName, icon.color))
    return {icons: list}
  }
}

export {GameService};

// TODO consider do we need "idle" state
