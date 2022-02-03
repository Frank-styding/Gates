class DT_Components extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "components",
      childs: data.map((component) => ({
        template: new DT_ComponentContainer(component),
      })),
    });
    this.data = data;
  }
}
