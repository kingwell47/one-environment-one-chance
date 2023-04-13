const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 375;
canvas.height = 667;

const mouse = {
  clicked: false,
  y: 0,
};

let level1 = {
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./assets/home.png",
};

const background = new Sprite(level1);

const interactable = new Interactable(131, 163);

let lastTime = 0;
// animation loop

const player = new Player();

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  // c.fillStyle = "white";
  // c.fillRect(0, 0, canvas.width, canvas.height);
  background.draw();

  player.draw();
  player.update();
  player.handleClick(mouse);
  interactable.draw(c);

  requestAnimationFrame(animate);
}
animate(0);
