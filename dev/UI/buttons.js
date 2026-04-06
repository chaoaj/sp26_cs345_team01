class Button {
    constructor(img, x, y, w, h, onClick) {
      this.img = img;   // the PNG
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.onClick = onClick;
    }
  
    draw() {
      image(this.img, this.x, this.y, this.w, this.h);
    }
  
    isHovered() {
      return (
        mouseX > this.x - this.w/2 &&
        mouseX < this.x + this.w/2 &&
        mouseY > this.y - this.h/2 &&
        mouseY < this.y + this.h/2
      );
    }
  
    handleClick() {
      if (this.isHovered()) {
        this.onClick();
      }
    }
  }