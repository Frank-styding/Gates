class DT_ComponentsContainer extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "components-container",
      childs: data.map((component) => new DT_ComponentContainer(component)),
    });
  }
}
