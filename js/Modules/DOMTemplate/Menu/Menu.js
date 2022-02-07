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

    this.childs.forEach((child) => {
      child.events.on("click", (name, option) => {
        this.childs.forEach((child) => {
          child.template.removeClass("selected");
        });
        option.template.addClass("selected");
        this.events.trigger("selected-option", [name]);
      });
    });
  }
}
