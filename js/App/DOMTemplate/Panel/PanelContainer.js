class DT_PanelContainer extends DOMTemplate {
  constructor() {
    super();
    this.template = this.createTemplate();
  }
  createTemplate() {
    return $(document.createElement("div")).addClass("panel-container");
  }
}
