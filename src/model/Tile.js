import { ANSWER_TYPE, ANIMATION_TYPE} from '../utils/Enums';

class Tile {
  constructor(letter, status, animation) {
    this.letter = letter;
    this.status = !!status ? status : ANSWER_TYPE.TBD ;
    this.nextStatus = ANSWER_TYPE.TBD;
    this.animation = !!animation ? animation : ANIMATION_TYPE.POP;
  }
}

export { Tile };
