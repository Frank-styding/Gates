class DT_ComponentContainer extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "component-container",
      childs: [
        {
          template: new DT_Component(data),
        },
        {
          tagName: "div",
          className: "subComponents",
          childs: (data.subComponents || []).map((subComponent) => ({
            template: new DT_ComponentContainer(subComponent),
          })),
        },
      ],
    });
    this.data = data;
  }
}
