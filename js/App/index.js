let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let display = new Display({
  canvas: canvas,
  width: innerWidth,
  height: innerHeight,
});

let button = new C_Button(200, 200);
button.transform.model.translate(500, 500).rotate(45);
button._update();
//console.log(button);
display.renderCollider(button, new Color(255, 0, 0, 255));

var lastCalledTime;
var fps;

function loop() {
  button.transform.model.rotate(10);
  display.clear();
  button._update();
  display.renderCollider(button, new Color(255, 0, 0, 255));
  display.renderComponent(button);

  if (!lastCalledTime) {
    lastCalledTime = Date.now();
    fps = 0;
  } else {
    delta = (Date.now() - lastCalledTime) / 1000;
    lastCalledTime = Date.now();
    fps = 1 / delta;
  }
  console.log(fps);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
