/* let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let display = new Display({
  canvas: canvas,
  width: innerWidth,
  height: innerHeight,
});

let controller = new Controller(canvas);

let slider = new C_Slider("nose", 0, 10, 100, 20);
let slider1 = new C_Slider("hola", 0, 20, 200, 30);
let textInput = new TextInput("nose", 100, 50);

controller.mouse.setMouseInteracion(slider);
controller.mouse.setMouseInteracion(slider1);
controller.mouse.setMouseInteracion(textInput);
controller.keyboard.setKeyBoardInteraction(textInput);

slider.state.setPropiety("transform", (transform) => {
  transform.model.translate(200, 200);
});

slider1.state.setPropiety("transform", (transform) => {
  transform.model.translate(400, 200).rotate(0);
});

textInput.state.setPropiety("transform", (transform) => {
  transform.model.translate(600, 600).rotate(0);
});

var lastCalledTime;
var fps; */

/* function loop() {
  display.clear();

  slider.update();
  slider1.update();

  textInput.update();

  display.renderComponent(slider);
  display.renderComponent(slider1);
  display.renderComponent(textInput);
 */
/*  display.text(
    260,
    200,
    slider.state.getPropiety("value"),
    "25px sans serif",
    new DisplayStyle({ fill: true, color: new Color(0, 0, 0, 255) })
  );

  display.text(
    480,
    200,
    slider1.state.getPropiety("value"),
    "25px sans serif",
    new DisplayStyle({ fill: true, color: new Color(0, 0, 0, 255) })
  ); */

/*   if (!lastCalledTime) {
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
requestAnimationFrame(loop); */
