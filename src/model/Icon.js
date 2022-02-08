import { ANSWER_TYPE, ANIMATION_TYPE} from '../utils/Enums';

class Icon {
  constructor(iconName, color, status, animation) {
    this.iconName = iconName;
    this.color = color;
    this.status = !!status ? status : ANSWER_TYPE.TBD ;
    this.animation = !!animation ? animation : ANIMATION_TYPE.POP;
  }
}

export { Icon };
