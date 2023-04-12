window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;
  switch (event.key) {
    case "w":
      // move player down
      keys.w.pressed = true;
      break;
    case "s":
      // move player down
      keys.s.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "w":
      // move player up
      keys.w.pressed = false;

    case "s":
      // move player down
      keys.s.pressed = false;

      break;
  }
});

window.addEventListener("click", (event) => {
  mouse.clicked = true;
  mouse.y = event.clientY - canvas.offsetTop;
});
