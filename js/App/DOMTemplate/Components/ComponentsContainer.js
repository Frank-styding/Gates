class DT_ComponentsContainer extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "components-container",
      childs: [
        {
          template: new DT_Components(data),
        },
      ],
    });
    this.data = data;
  }
}
