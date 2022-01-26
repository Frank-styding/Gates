let canvas = document.createElement("canvas");
document.body.appendChild(canvas);

let display = new Display({
  width: innerWidth,
  height: innerHeight,
  canvas: canvas,
});
let controller = new Controller(canvas);

let led = new C_Led(100,100);

led.transform.setValue((transform)=>{
  transform.model.translate(200,200);
  return transform;
})


let lastCalledTime, fps;
function loop() {
  display.clear();
  display.background(new Color(0, 0, 0, 0));

  display.renderComponent(led);
  /*   display.renderComponent(led);
  display.renderComponent(led1); */

  if (!lastCalledTime) {
    lastCalledTime = Date.now();
    fps = 0;
  } else {
    let delta = (Date.now() - lastCalledTime) / 1000;
    lastCalledTime = Date.now();
    fps = 1 / delta;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
