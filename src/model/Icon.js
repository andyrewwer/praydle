class Icon {
  constructor(iconName, color, status, animation) {
    this.iconName = iconName;
    this.color = color;
    this.status = !!status ? status : 'tbd' ;
    this.animation = !!animation ? animation : 'pop';
  }
}

export {Icon};
