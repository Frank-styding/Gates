class DT_Components extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
  }
  createTemplate() {
    let $components = $(document.createElement("div")).addClass("components");

    for (let component of this.data) {
      let _component = new DT_ComponentContainer(component);

      $components.append(_component.getTemplate());
      this.childs.push(_component);
    }

    return $components;
  }
}
