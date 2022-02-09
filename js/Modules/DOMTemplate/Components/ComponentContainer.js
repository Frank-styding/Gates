class DT_ComponentContainer extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "component-container",
      childs: [
        {
          tagName: "div",
          className: "container",
          childs: [new DT_Component(data), new DT_ComponentOptions()],
        },
        {
          tagName: "div",
          className: "subComponents",
          childs: (data.subComponents || []).map(
            (subComponent) => new DT_ComponentContainer(subComponent)
          ),
        },
      ],
    });

    this.childs[0].events.on("expand-click", () => {
      this.childs[1].template.toggleClass("close");
      console.log(this.childs[1]);
    });
    this.childs[0].events.on("click", () => {
      console.log("hola");
    });
  }
}
