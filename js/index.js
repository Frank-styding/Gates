let propertiesContainer = new DT_PropertiesContainer([
  {
    title: "Transform",
    subProperties: [
      {
        name: "Scale",
        inputs: [
          {
            name: "x",
            type: "text",
            id: "scale-x",
          },
          {
            name: "y",
            type: "text",
            id: "scale-y",
          },
        ],
      },
      {
        name: "Translate",
        inputs: [
          {
            name: "x",
            type: "text",
            id: "scale-x",
          },
          {
            name: "y",
            type: "text",
            id: "scale-y",
          },
        ],
      },
      {
        name: "Rotate",
        inputs: [
          {
            name: "angle",
            type: "text",
            id: "scale-x",
          },
        ],
      },
    ],
  },
  {
    title: "Style",
    subProperties: [
      {
        name: "Scale",
        inputs: [
          {
            name: "x",
            type: "text",
            id: "scale-x",
          },
          {
            name: "y",
            type: "text",
            id: "scale-y",
          },
        ],
      },
      {
        name: "Translate",
        inputs: [
          {
            name: "x",
            type: "text",
            id: "scale-x",
          },
          {
            name: "y",
            type: "text",
            id: "scale-y",
          },
        ],
      },
      {
        name: "Rotate",
        inputs: [
          {
            name: "angle",
            type: "text",
            id: "scale-x",
          },
        ],
      },
    ],
  },
]);

let panel = new DT_Panel();
let menu = new DT_Menu(["Component", "Properies"]);
let panelContainer = new DT_PanelContainer();

let componentsContainer = new DT_ComponentsContainer([
  {
    name: "Rect",
    iconName: "rect",
    subComponents: [
      {
        name: "Circle",
        iconName: "circle",
        subComponents: [
          {
            name: "Component",
            iconName: "component",
            subComponents: [],
          },
        ],
      },
      {
        name: "Circle",
        iconName: "rect",
        subComponents: [
          {
            name: "Component",
            iconName: "component",
            subComponents: [],
          },
        ],
      },
    ],
  },
]);
/* panelContainer.addChild(propertiesContainer); */

panelContainer
  .getTemplate()
  .append(componentsContainer.getTemplate()); /* .html(`
<div class="components-container">
  <div class="components">
    <div class="component-container">
        <div class="component">
           <div class="icon">
             <div class="rect"></div>
           </div>
           <div class="name">Rect</div>
        </div>
        <div class="subComponents">
          <div class="component-container">
            <div class="component">
               <div class="icon">
                 <div class="rect"></div>
               </div>
               <div class="name">Rect</div>
            </div>
            <div class="subComponents"></div>
          </div>
        </div>
    </div>
  </div>
</div>
`); */

panel.addChild(menu);
panel.addChild(panelContainer);

$("#root").append(panel.getTemplate());

/* let myFont = new FontFace("Roboto", "url(fonts/Roboto-Regular.ttf)");

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
 */
