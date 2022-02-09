class DT_ComponentContainer extends DOMTemplate {
  static currentSelected = undefined;
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

    this.isDelete = false;

    //expand
    this.childs[0].childs[0].events.on("expand-click", () => {
      this.childs[1].template.toggleClass("close");
    });

    //select
    this.childs[0].childs[0].events.on("click", () => {
      if (
        DT_ComponentContainer.currentSelected != undefined &&
        DT_ComponentContainer.currentSelected != this
      ) {
        DT_ComponentContainer.currentSelected.childs[0].childs[1].template.removeClass(
          "open"
        );
      }
      DT_ComponentContainer.currentSelected = this;
      this.childs[0].childs[1].template.toggleClass("open");
    });

    //options
    this.childs[0].childs[1].events.on("remove", () => {
      this.isDelete = true;
      this.template.remove();
      if (this.parent) {
        if (this.parent.className == "subComponents") {
          this.parent.parent.events.trigger("update-childs");
        }
      }
    });
    this.childs[0].childs[1].events.on("add", () => {
      console.log("add");
    });
    this.childs[0].childs[1].events.on("properties", () => {
      console.log("properties");
    });

    this.events.on("update-childs", () => {
      this.childs[1].childs = this.childs[1].childs.filter(
        (item) => !item.isDelete
      );
      if (data.subComponents == undefined || data.subComponents.length == 0) {
        this.childs[0].childs[0].events.trigger("hidden");
      }
      if (this.parent) {
        if (this.parent.className == "subComponents") {
          this.parent.parent.events.trigger("update-childs");
          this.parent.parent.events.trigger("update-expand");
        }
      }
    });

    this.events.on("update-expand", () => {
      if (data.subComponents == undefined || data.subComponents.length == 0) {
        this.childs[0].childs[0].events.trigger("hidden");
      }
      if (this.parent) {
        if (this.parent.className == "subComponents") {
          this.parent.parent.events.trigger("update-expand");
        }
      }
    });

    if (data.subComponents == undefined || data.subComponents.length == 0) {
      this.childs[0].childs[0].events.trigger("hidden");
    }
  }
}
