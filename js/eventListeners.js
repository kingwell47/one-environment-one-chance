window.addEventListener("click", (event) => {
  mouse.clicked = true;
  mouse.y = event.clientY - canvas.offsetTop;
  console.log(event.clientX, event.clientY);
  interactable.handleClick(event.offsetX, event.offsetY);
});
