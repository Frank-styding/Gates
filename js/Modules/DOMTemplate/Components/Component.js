class DT_Component extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "component",
      childs: [
        {
          tagName: "div",
          className: "container",
          childs: [
            {
              tagName: "div",
              className: "icon",
              childs: [
                {
                  tagName: "div",
                  className: `icon-${data.iconName}`,
                },
              ],
            },
            {
              tagName: "div",
              className: "name",
              innerHTML: data.name,
            },
            {
              tagName: "div",
              className: "icon expand",
              childs: [
                {
                  tagName: "div",
                  className: "icon-expand",
                },
              ],
            },
          ],
        },
      ],
    });

    this.childs[0].childs[2].template.on("click", () => {
      this.events.trigger("expand-click");
    });
    this.template.on("click", () => {
      this.events.trigger("click");
    });
  }
}
