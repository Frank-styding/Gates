class DT_PropertiesContainer extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "properties-container",
      childs: data.map((property) => new DT_Property(property)),
    });
    this.data = data;
  }
}
