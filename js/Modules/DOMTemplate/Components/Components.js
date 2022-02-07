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

    this.events.on("update-data", () => {
      this.childs = this.childs.filter((item) => item.isRemove === false);

      this.data.splice(0, this.data.length);
      this.data.push(...this.childs.map((item) => item.data));

      if (this.parent) {
        this.parent.events.trigger("update-data", [this.data]);
      }
    });
  }
}
