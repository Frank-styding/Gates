class DOMTemplate {
  constructor() {
    this.template = $(document.createElement("div"));
    this.childs = [];
  }
  createTemplate() {
    return $(document.createElement("div"));
  }
  addChild(child) {
    this.template.append(child.getTemplate());
    this.childs.push(child);
  }
  getTemplate() {
    return this.template;
  }
}
