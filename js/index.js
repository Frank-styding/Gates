let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let display = new Display({
  canvas: canvas,
  width: innerWidth,
  height: innerHeight,
});

let controller = new Controller(canvas);
let circle = new C_Circle("a", 10);
let rect = new C_Rect("b", 200, 200);

controller.mouse.setMouseInteracion(circle);
controller.mouse.setMouseInteracion(rect);

circle.state.setPropiety("transform", (tranform) => {
  tranform.model.translate(100, 100);
});
rect.state.setPropiety("transform", (tranform) => {
  tranform.model.translate(200, 200);
});

var lastCalledTime;
var fps;

function loop() {
  circle.update();
  rect.update();
  display.renderComponent(circle);
  display.renderComponent(rect);

  if (!lastCalledTime) {
    lastCalledTime = Date.now();
    fps = 0;
  } else {
    delta = (Date.now() - lastCalledTime) / 1000;
    lastCalledTime = Date.now();
    fps = 1 / delta;
  }
  ///console.log(fps);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
