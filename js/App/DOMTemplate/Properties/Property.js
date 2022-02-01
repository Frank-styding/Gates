class DT_Property extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "property",
      childs: [
        {
          tagName: "div",
          className: "title",
          innerHTML: data.title,
        },
        {
          tagName: "div",
          className: "subProperties-container",
          childs: data.subProperties.map(
            (subPorperty) => new DT_SubProperty(subPorperty)
          ),
        },
      ],
    });
    this.data = data;
  }
}
