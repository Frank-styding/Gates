class DT_InputContainer extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "container-input",
      childs: [
        {
          tagName: "div",
          className: "name",
          innerHTML: data.name,
        },
        {
          tagName: "input",
          id: data.id,
          attributes: {
            type: data.type,
          },
        },
      ],
    });
    this.data = data;
  }
}
