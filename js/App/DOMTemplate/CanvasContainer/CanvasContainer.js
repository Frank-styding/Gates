class DT_CanvasContainer extends DOMTemplate {
  constructor() {
    super({
      tagName: "div",
      className: "canvas-container",
      childs: [
        {
          tagName: "canvas",
          id: "canvas",
        },
      ],
    });
  }
}
