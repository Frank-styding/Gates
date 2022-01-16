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
let rect1 = new C_Rect("c", 20, 20);


rect.addChlid(rect1);


controller.mouse.setMouseInteracion(circle);
controller.mouse.setMouseInteracion(rect);

circle.state.setPropiety("transform", (tranform) => {
  tranform.model.translate(100, 100);
});

circle.state.setPropiety("style",(style)=>{
  style.fill = false;
  style.color = new Color(255,0,0,255)
})

rect.state.setPropiety("style",(style)=>{
  style.fill = false;
  style.color = new Color(0,255,0,255)
  style.lineStyle = new LineStyle({lineWidth:2})
})

rect.state.setPropiety("transform", (tranform) => {
  tranform.model.translate(200, 200);
});

rect1.state.setPropiety("style",(style)=>{
  style.color = new Color(255,0,0,255);
})


rect1._mouseDown = (()=>{
  console.log("hola")
}).bind(rect1)


circle._mouseOver = (()=>{
  console.log("hola")
}).bind(rect1)

var lastCalledTime;
var fps;

function loop() {
  display.clear()
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
