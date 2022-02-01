class DT_MenuOption extends DOMTemplate {
  constructor(name, selected = false) {
    super({
      tagName: "div",
      className: `option ${selected ? "selected" : ""}`,
      innerHTML: name,
    });
    this.name = name;
    this.selected = selected;
  }
}
