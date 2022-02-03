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
  }
  _registerEvents() {
    this.childs.forEach((child) => {
      child.template.click(() => {
        this.childs.forEach((child) => {
          child.template.removeClass("selected");
        });
        child.template.addClass("selected");
        console.log(child);
        this.template.trigger("selected-option", [child.name]);
      });
    });
  }
}
