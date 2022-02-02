class DT_Menu extends DOMTemplate {
  constructor(options) {
    super({
      tagName: "div",
      className: "menu",
      id: "menu",
      childs: options.map(
        (option, idx) => new DT_MenuOption(option, idx == 0 ? true : false)
      ),
    });
    $("body").on("click", "#menu > .option", (event) => {
      this.templateStruct.childs.forEach((item) =>
        item.template.removeClass("selected")
      );
    });
  }
}
