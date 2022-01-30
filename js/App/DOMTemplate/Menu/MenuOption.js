class DT_MenuOption extends DOMTemplate {
  constructor(name, selected = false) {
    super();
    this.name = name;
    this.selected = selected;
    this.template = this.createTemplate();
  }
  setSelected(value) {
    this.selected = value;
    if (this.selected) {
      this.template.addClass("selected");
    }
  }
  createTemplate() {
    let $option = $(document.createElement("div")).addClass("option");
    $option.html(this.name);
    if (this.selected) {
      $option.addClass("selected");
    }
    return $option;
  }
}
