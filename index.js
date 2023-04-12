const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 375;
canvas.height = 667;

const keys = {
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
};

const mouse = {
  clicked: false,
  y: 0,
};

let lastTime = 0;
// animation loop

const player = new Player();

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.draw();
  player.update();
  player.handleInput(keys);
  player.handleClick(mouse);

  requestAnimationFrame(animate);
}
animate(0);
