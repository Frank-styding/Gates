class DT_ComponentsContainer extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
    this.addChild(new DT_Components(this.data));
  }
  createTemplate() {
    return $(document.createElement("div")).addClass("components-container");
  }
}
