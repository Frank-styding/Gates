let myFont = new FontFace("Roboto", "url(fonts/Roboto-Regular.ttf)");

async function load() {
  let font = await myFont.load();
  document.fonts.add(font);
  app();
}

load();

function app() {
  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  let display = new Display({
    width: innerWidth,
    height: innerHeight,
    canvas: canvas,
  });
  let controller = new Controller(canvas);
  let boxConections = new C_BoxConections("nose", 200, 200, 10);

  boxConections.addConection(new C_Conection("A", 10), "t");
  boxConections.addConection(new C_Conection("B", 10), "t");
  boxConections.addConection(new C_Conection("C", 10), "t");
  boxConections.addConection(new C_Conection("D", 10), "t");

  boxConections.addConection(new C_Conection("A", 10), "b");
  boxConections.addConection(new C_Conection("B", 10), "b");
  boxConections.addConection(new C_Conection("C", 10), "b");
  boxConections.addConection(new C_Conection("D", 10), "b");
  boxConections.addConection(new C_Conection("A", 10), "l");
  boxConections.addConection(new C_Conection("A", 10), "r");
  boxConections.addConection(new C_Conection("D", 10), "r");

  boxConections.addEvents("mouseDown", () => {
    console.log("hola");
  });

  boxConections.transform.setValue((transform) => {
    transform.model.translate(200, 200).rotate(45);
    return transform;
  });

  controller.setMouseInteracion(boxConections);

  let lastCalledTime, fps;
  function loop() {
    display.clear();
    display.background(new Color(0, 0, 0, 0));

    display.renderComponent(boxConections);
    boxConections.update();

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
}
