/* let propertiesContainerData = [
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
];
let componentsContainerData = [
  {
    name: "nose",
    iconName: "rect",
    subComponents: [
      {
        name: "circle",
        iconName: "circle",
      },
      {
        name: "range",
        iconName: "range",
      },
      {
        name: "component",
        iconName: "component",
      },
      {
        name: "switch",
        iconName: "switch",
        subComponents: [
          {
            name: "nose",
            iconName: "rect",
          },
        ],
      },
    ],
  },
  {
    name: "nose",
    iconName: "rect",
    subComponents: [
      {
        name: "circle",
        iconName: "circle",
      },
      {
        name: "range",
        iconName: "range",
      },
      {
        name: "component",
        iconName: "component",
      },
      {
        name: "switch",
        iconName: "switch",
        subComponents: [
          {
            name: "nose",
            iconName: "rect",
          },
        ],
      },
    ],
  },
];

let menu = new DT_Menu(["components", "properties"]);
let propertiesContainer = new DT_PropertiesContainer(propertiesContainerData);
let componentsContainer = new DT_ComponentsContainer(componentsContainerData);

componentsContainer.events.on("update-data", (data) => {
  console.log(data);
});

componentsContainer.events.on("selected", (item) => {
  console.log(item);
});

let panelContainer = new DT_PanelContainer([
  {
    template: componentsContainer,
  },
]);

let root = new DOMTemplate({
  template: $("#root")[0],
  childs: [
    {
      template: new DT_CanvasContainer(),
    },
    {
      template: new DT_Panel([
        {
          template: menu,
        },
        {
          template: panelContainer,
        },
      ]),
    },
  ],
});

menu.events.on("selected-option", (a) => {
  if (a == "components") {
    panelContainer.childs[0] = componentsContainer;
  }
  if (a == "properties") {
    panelContainer.childs[0] = propertiesContainer;
  }
  panelContainer.createTemplateStruct(panelContainer);
});

let { width, height } = $("#canvas-container")[0].getBoundingClientRect();

let $canvas = $("#canvas")[0];
let display = new Display({
  width: width,
  height: height,
  canvas: $canvas,
});

let controller = new InputController($canvas);

let scene = new C_Scene(width, height);
let circle = new C_Circle(50);
let circle1 = new C_Circle(20);

circle.transform.setValue((transform) => {
  transform.model.translate(200, 200);
  return transform;
});

circle1.backgroudStyle.setValue((backgroudStyle) => {
  backgroudStyle.color = new Color(255, 0, 0);
  return backgroudStyle;
}); */

//circle.hasMouseInteraction = false;
/* circle.addChild(circle1);

scene.addChild(circle);

controller.setMouseInteraction(scene);
 */
/* function loop() {
  display.clear();
  
  circle.update();
  display.renderComponent(circle);
  scene.update();
  display.renderCollider(circle);
  display.renderComponent(scene);
   display.rect(
    100,
    100,
    100,
    100,
    new DisplayStyle({ fill: true, color: new Color(255, 0, 0) })
  );

  requestAnimationFrame(loop);
} */
/* loop(); */
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
let componentsContainer = new DT_ComponentsContainer([
  {
    name: "nose",
    iconName: "rect",
    subComponents: [
      {
        name: "hola",
        iconName: "circle",
      },
      {
        name: "hola",
        iconName: "circle",
      },
      {
        name: "hola",
        iconName: "circle",
      },
    ],
  },
  {
    name: "nose",
    iconName: "rect",
    subComponents: [
      {
        name: "hola",
        iconName: "circle",
      },
      {
        name: "hola",
        iconName: "circle",
      },
      {
        name: "hola",
        iconName: "circle",
        subComponents: [
          {
            name: "nose",
            iconName: "rect",
          },
        ],
      },
    ],
  },
]);

let root = new DOMTemplate({
  template: $("#root")[0],
  childs: [
    {
      template: new DT_CanvasContainer(),
    },
    {
      template: new DT_Panel([
        {
          template: componentsContainer,
        },
      ]),
    },
  ],
});
