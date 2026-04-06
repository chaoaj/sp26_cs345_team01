class ButtonManager {
    constructor() {
      this.buttons = [];
    }
  
    add(button) {
      this.buttons.push(button);
    }
  
    clear() {
      this.buttons = [];
    }
  
    draw() {
      for (let b of this.buttons) {
        b.draw();
      }
    }
  
    mousePressed() {
      for (let b of this.buttons) {
        b.handleClick();
      }
    }
  }