class DT_Menu extends DOMTemplate {
  constructor(options) {
    super({
      tagName: "div",
      className: "menu",
      id: "menu",
      childs: options.map((option, idx) => ({
        template: new DT_MenuOption(option, idx == 0 ? true : false),
      })),
    });
    this.selectedOption = "";
    this.childs.forEach((child) => {
      child.template.on("click", () => {
        this.childs.forEach((child) => {
          child.template.removeClass("selected");
        });
        child.template.addClass("selected");
        this.template.trigger("selected-option", [child.name]);
      });
    });

    this.template.on("click", () => {
      console.log("hola");
    });
    console.log($._data(this.childs[0].template[0], "events"));
  }
}
