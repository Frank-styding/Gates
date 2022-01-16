let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let display = new Display({
  canvas: canvas,
  width: innerWidth,
  height: innerHeight,
});

let controller = new Controller(canvas);
let slider = new C_Slider("nose", 0, 10, 100, 40);
controller.mouse.setMouseInteracion(slider);

slider.state.setPropiety("transform", (transform) => {
  transform.model.translate(200, 200);
});

var lastCalledTime;
var fps;

function loop() {
  display.clear();
  slider.update();
  display.renderComponent(slider);

  display.text(
    260,
    200,
    slider.state.getPropiety("value"),
    "25px sans serif",
    new DisplayStyle({ fill: true, color: new Color(0, 0, 0, 255) })
  );

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
