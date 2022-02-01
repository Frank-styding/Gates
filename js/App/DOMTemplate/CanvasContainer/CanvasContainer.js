class DT_CanvasContainer extends DOMTemplate {
  constructor() {
    super({
      tagType: "div",
      className: "canvas-container",
      childs: [
        {
          tagType: "canvas",
          id: "canvas",
        },
      ],
    });
  }
}
