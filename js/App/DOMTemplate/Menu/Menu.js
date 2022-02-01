class DT_Menu extends DOMTemplate {
  constructor(options) {
    super({
      tagName: "div",
      className: "menu",
      childs: options.map(
        (option, idx) => new DT_MenuOption(option, idx == 0 ? true : false)
      ),
    });

    /* this.template = this.createTemplate(options);
    this.selectedOption = $(this.template[0].children[0]).html();

    for (let option of this.template[0].children) {
      let $option = $(option);
      $option.click(() => {
        for (let _option of this.template[0].children) {
          $(_option).removeClass("selected");
        }
        $option.addClass("selected");
        this.selectedOption = $option.html();
      });
    } */
  }
}
