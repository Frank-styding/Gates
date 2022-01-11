let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let display = new Display({
  canvas: canvas,
  width: innerWidth,
  height: innerHeight,
});

let button = new C_Button(200, 200, new Color(255, 0, 0, 255));
let button2 = new C_Button(20, 100, new Color(255, 255, 0, 255));
button.transform.model.translate(500, 500).rotate(45);
button2.transform.model.translate(300, 300);
button._update();
button2._update();
//console.log(button);

var lastCalledTime;
var fps;

function loop() {
  /*   button.transform.model.rotate(10);
  button2.transform.model.rotate(15); */
  display.clear();
  button._update();
  button2._update();
  display.renderCollider(button, new Color(255, 0, 0, 255));
  display.renderComponent(button);

  display.renderCollider(button2, new Color(255, 0, 0, 255));
  display.renderComponent(button2);

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
