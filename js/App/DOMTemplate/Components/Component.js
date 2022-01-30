class DT_Component extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
  }
  createTemplate() {
    this.childs = [];
    let $component = $(document.createElement("div")).addClass("component");
    let $icon = $(document.createElement("div")).addClass("icon");
    let $name = $(document.createElement("div")).addClass("name");

    $name.html(this.data.name);
    $icon.append(`<div class="icon-${this.data.iconName}"> </div>`);

    $component.append($icon);
    $component.append($name);
    return $component;
  }
}
