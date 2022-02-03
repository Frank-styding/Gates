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
      ],
    });
    this.data = data;
  }
}
