class DT_Component extends DOMTemplate {
  constructor(data) {
    super({
      tagType: "div",
      className: "component",
      childs: [
        {
          tagType: "div",
          className: "icon",
          chidls: [
            {
              tagType: "div",
              className: `icon-${data.iconName}`,
            },
          ],
        },
        {
          tagType: "div",
          className: "name",
          innerHTML: data.name,
        },
      ],
    });
    this.data = data;
  }
}
