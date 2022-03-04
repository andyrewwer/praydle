import { ANSWER_TYPE, ANIMATION_TYPE} from '../utils/Enums';

class Tile {
  constructor(letter, status = ANSWER_TYPE.TBD, animation = ANIMATION_TYPE.POP) {
    this.letter = letter;
    this.status = status;
    this.nextStatus = ANSWER_TYPE.TBD;
    this.animation = animation;
  }
}

export { Tile };
