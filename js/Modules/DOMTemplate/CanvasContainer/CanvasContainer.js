class DT_CanvasContainer extends DOMTemplate {
  constructor() {
    super({
      tagName: "div",
      className: "canvas-container",
      id: "canvas-container",
      childs: [
        {
          tagName: "canvas",
          id: "canvas",
        },
      ],
    });
  }
}
