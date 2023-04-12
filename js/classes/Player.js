class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 100;
    this.height = 100;
    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.speed = 3;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.y += this.velocity.y;

    if (this.targetY !== undefined) {
      const distance = this.targetY - this.position.y;
      if (Math.abs(distance) <= this.speed) {
        this.position.y = this.targetY;
        this.velocity.y = 0;
        this.targetY = undefined;
      } else {
        this.position.y += this.velocity.y;
      }
    }
  }

  handleInput(keys) {
    if (this.preventInput) return;
    this.velocity.y = 0;
    if (keys.w.pressed) {
      this.velocity.y = -this.speed;
      this.lastDirection = "up";
    } else if (keys.s.pressed) {
      this.velocity.y = this.speed;
      this.lastDirection = "down";
    } else {
      // if (this.lastDirection === "left") this.switchSprite("idleLeft");
      // else this.switchSprite("idleRight");
    }
  }

  handleClick(mouse) {
    if (mouse.clicked && !this.velocity.y) {
      const targetY = mouse.y - this.height / 2;
      const distance = targetY - this.position.y;
      const direction = Math.sign(distance);
      const speed = this.speed * direction;
      this.velocity.y = speed;
      this.targetY = targetY;
    }
    // if (this.position.y > mouse.y && mouse.clicked) {
    //   if (this.position.y - mouse.y <= this.speed) {
    //     this.position.y = mouse.y;
    //   } else {
    //     this.position.y -= this.speed;
    //   }
    // } else if (this.position.y < mouse.y && mouse.clicked) {
    //   if (mouse.y - this.position.y <= this.speed) {
    //     this.position.y = mouse.y;
    //   } else {
    //     this.position.y += this.speed;
    //   }
    // }
    // if (this.position.y === mouse.y) {
    //   mouse.clicked = false;
    // }
  }
}
