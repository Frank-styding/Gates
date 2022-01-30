class DT_CanvasContainer extends DOMTemplate {
  constructor(id) {
    super();
    this.id = id;
    this.template = this.createTemplate();
  }
  createTemplate() {
    let $canvasContainer = $(document.createElement("div")).addClass(
      "canvas-container"
    );
    let $canvas = $(document.createElement("canvas"));
    $canvas.attr("id", this.id);
    $canvasContainer.append($canvas);
    return $canvasContainer;
  }
}
