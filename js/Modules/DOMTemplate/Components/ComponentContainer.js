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

    let getParent = () => {
      if (this.parent === undefined) return undefined;
      if (this.parent.className === "subComponents") return this.parent.parent;
      return this.parent;
    };

    this.data = data;
    this.isRemove = false;

    this.childs[0].events.on("remove", () => {
      this.isRemove = true;
      this.template.remove();
      this.childs = [];

      let parent = getParent();
      if (parent) {
        parent.events.trigger("update-data");
      }
    });

    this.childs[0].events.on("selected", () => {});

    this.events.on("update-data", () => {
      this.childs[1].childs = this.childs[1].childs.filter(
        (item) => item.isRemove === false
      );
      this.data.subComponents = this.childs[1].childs.map((item) => item.data);

      let parent = getParent();
      if (parent) {
        parent.events.trigger("update-data");
      }
    });
  }
}
