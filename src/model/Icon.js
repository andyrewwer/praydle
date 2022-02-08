class Icon {
  constructor(iconName, color, status) {
    this.iconName = iconName;
    this.color = color;
    this.status = status;
  }

  getIconName() {
    return this.iconName;
  }

  getColor() {
    return this.color;
  }

  getStatus() {
    return this.status;
  }

  setIconName(iconName) {
    this.iconName = iconName;
  }

  setColor(color) {
    this.color = color;
  }

  setStatus(status) {
    this.status = status;
  }
}

export {Icon};
