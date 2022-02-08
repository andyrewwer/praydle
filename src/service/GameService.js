import {BUILDING_ICONS, WEAPON_ICONS, PEOPLE_ICONS, ANSWER_TYPE, ANIMATION_TYPE} from '../utils/Enums';
import {Icon} from '../model/Icon';

export const ENTER_KEY = 13;
export const BACKSPACE_KEY = 8;
// TODO multiple answers
const answers = [[BUILDING_ICONS.FIVE, WEAPON_ICONS.ONE, PEOPLE_ICONS.TWO]]

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

  _countsInSet(row) {
    const counts = {};
    row.forEach(function (x) { counts[x] = (counts[x] || 0) + 1;});
    return counts

  }

  setIconStatus(row, index) {
    let answer = answers[0];
    let icons = [answer[0].iconName, answer[1].iconName, answer[2].iconName];
    let iconsCount = this._countsInSet(icons)
    let colors = [answer[0].color, answer[1].color, answer[2].color];
    let colorsCount = this._countsInSet(colors)

    // TODO BUG if you put an icon that's "right" but duplicate even if color is right will still say it's wrong
    if (icons.indexOf(row[index].iconName) > -1) {
      let count = 1
      for (let i = 0; i < index; i ++) {
        if (row[index].iconName === row[i].iconName) {
          count += 1;
        }
      }
      return count === iconsCount[row[index].iconName] ? ANSWER_TYPE.CORRECT : ANSWER_TYPE.ABSENT;
    }
    if (colors.indexOf(row[index].color) > -1) {
        let count = 1
        for (let i = 0; i < index; i ++) {
          if (row[index].color === row[i].color) {
            count += 1;
          }
        }
        return count === colorsCount[row[index].color] ? ANSWER_TYPE.PRESENT : ANSWER_TYPE.ABSENT;
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
    row[i].status = this.setIconStatus(row, i);
    list[current_row] = row;
    return {icons: list}
  }

  rowIsCorrect(row) {
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
