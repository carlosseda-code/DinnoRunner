
class Cactus {

    constructor() {
      this.r = 75;
      this.x = width;
      this.y = height - this.r;
    }
  
    move() {
      this.x -= 16;
    }
  
    show() {
      image(tImg, this.x, this.y, this.r, this.r);
    }
  
  }