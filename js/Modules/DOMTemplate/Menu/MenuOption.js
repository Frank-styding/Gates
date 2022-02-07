class DT_MenuOption extends DOMTemplate {
  constructor(name, selected = false) {
    super({
      tagName: "div",
      className: `option ${selected ? "selected" : ""}`,
      innerHTML: name,
    });
    this.name = name;
    this.selected = selected;

    this.template.on("click", () => {
      this.events.trigger("click", [name, this]);
    });
  }
}
