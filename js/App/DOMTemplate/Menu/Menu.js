class DT_Menu extends DOMTemplate {
  constructor(options) {
    super();
    this.template = this.createTemplate(options);

    for (let option of this.template[0].children) {
      let $option = $(option);
      $option.click(() => {
        for (let _option of this.template[0].children) {
          $(_option).removeClass("selected");
        }
        $option.addClass("selected");
      });
    }
  }
  createTemplate(options) {
    this.childs = [];
    let $menu = $(document.createElement("div")).addClass("menu");
    let start = true;

    for (let option of options) {
      let _option = new DT_MenuOption(option, start);
      $menu.append(_option.getTemplate());
      this.childs.push(_option);

      if (start) {
        start = false;
      }
    }
    return $menu;
  }
}
