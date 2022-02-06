class DT_Component extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "component",
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
          className: "controls",
          childs: [
            {
              tagName: "div",
              className: "btn-container add",
              childs: [
                {
                  tagName: "div",
                  className: "btn add",
                  innerHTML: "+",
                },
              ],
            },
            {
              tagName: "div",
              className: "btn-container remove",
              childs: [
                {
                  tagName: "div",
                  className: "btn remove",
                  innerHTML: "+",
                },
              ],
            },
          ],
        },
      ],
    });
    this.data = data;
    this.template.find(".btn-container.add").on("click", () => {
      this.template.trigger("_add");
    });
    this.template.find(".btn-container.remove").on("click", () => {
      this.template.trigger("_remove");
    });
  }
}