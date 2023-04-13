class Player {
  constructor() {
    this.position = {
      x: 50,
      y: 50,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 50;
    this.height = 100;
    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.speed = 1;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    if (this.targetY !== undefined) {
      const distance = this.targetY - this.position.y;
      if (Math.abs(distance) <= this.speed) {
        this.position.y = this.targetY;
        this.velocity.y = 0;
        this.targetY = undefined;
      } else {
        // Restrict position within canvas bounds
        this.position.y = Math.min(
          Math.max(this.position.y + this.velocity.y, 30),
          canvas.height - this.height - 30
        );
      }
    }
  }

  handleClick(mouse) {
    if (mouse.clicked && !this.velocity.y) {
      // Only update velocity if it hasn't been set by handleInput
      const targetY = mouse.y - this.height / 2;
      // Restrict targetY within canvas bounds
      this.targetY = Math.min(
        Math.max(targetY, 30),
        canvas.height - this.height - 30
      );
      const distance = this.targetY - this.position.y;
      const direction = Math.sign(distance);
      const speed = this.speed * direction;
      this.velocity.y = speed;
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
