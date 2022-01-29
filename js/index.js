function propertiesContainerTemplate(properties) {
  return `
  <div class="properties-container">
      ${properties.map((property) => propertyTemplate(property)).join("")}
  </div>
  `;
}
function propertyTemplate({ title, subProperties }) {
  return `
  <div class="property">
      <div class="title">${title}</div>
      <div class="subProperties-container">
      ${subProperties
        .map((subProperty) => subPropertyTemplate(subProperty))
        .join("")}
      </div>
  </div>
  `;
}
function subPropertyTemplate({ name, inputs }) {
  return `
  <div class="subProperty">
    <div class="name">${name}</div>
    <div class="inputs">
        ${inputs.map((input) => containerInputTemplate(input)).join("")}
    </div>
  </div>
  `;
}
function containerInputTemplate({ name, type, id }) {
  return `
  <div class="container-input">
     <div class="name">${name}</div>
     <input type="${type}" id="${id}"/>
  </div>
  `;
}
$("#panel-container").append(
  propertiesContainerTemplate([
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
  ])
);

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
