let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let display = new Display({
  canvas: canvas,
  width: innerWidth,
  height: innerHeight,
});

let controller = new Controller(canvas);
let button = new C_Button(200, 200, new Color(255, 0, 0, 255), "hla");
let circle = new C_Button(20, 20, new Color(255, 255, 0, 255), "A");
button.addChlid(circle);

controller.mouse.setMouseInteracion(button);
button.state.setPropiety("transform", (transform) => {
  transform.model.translate(500, 500).rotate(12);
});

circle.state.setPropiety("transform", (transform) => {
  transform.model.translate(20, 20).rotate(90);
  console.log(circle);
});

button.state.setPropiety("color", (color) => {
  color.r = 255;
  color.g = 0;
  color.b = 255;
});
button.update();

var lastCalledTime;
var fps;

function loop() {
  button.state.setPropiety("transform", (transform) => {
    transform.model.rotate(1);
  });
  display.clear();
  display.background(new Color(0, 0, 0, 255));
  button.update();

  display.renderComponent(button);
  display.renderCollider(button, new Color(255, 255, 0, 255));
  //display.circle(circle.pos.x, circle.pos.y, 4, new Color(255, 255, 255, 255));

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
