class UI {
  constructor(text, x, y, font, color) {
    this.x = x;
    this.y = y;
    this.font = font;
    this.color = color;
    this.text = text;
  }

  draw() {
    c.font = this.font;
    c.fillStyle = this.color;
    c.fillText(this.text, this.x, this.y);
  }
}
