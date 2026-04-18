class Button {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.maxW = w + 10;
    this.maxH = h + 10;
  }

  update() {
    this.draw();
    if (this.isHovered()) {
      this.growBtn();
    }
    else if (!this.isHovered()) {
      this.shrinkBtn()
    }
  }

  draw() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }

  isHovered() {
    return (mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY > this.y - this.h / 2 &&
      mouseY < this.y + this.h / 2)      
  }

  growBtn() {
    if (this.w < this.maxW && this.h < this.maxH) {
      this.w += 10;
      this.h += 10;
    }
  }

  shrinkBtn() {
    if (this.w == this.maxW && this.h == this.maxH) {
      this.w -= 10;
      this.h -= 10;
    }
  }
}
