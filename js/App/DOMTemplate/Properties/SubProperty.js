class DT_SubProperty extends DOMTemplate {
  constructor(data) {
    super({
      tagName: "div",
      className: "subProperty",
      childs: [
        {
          tagName: "div",
          className: "name",
          innerHTML: data.name,
        },
        {
          tagName: "div",
          className: "inputs",
          childs: data.inputs.map((input) => new DT_InputContainer(input)),
        },
      ],
    });
    this.data = data;
  }
}
