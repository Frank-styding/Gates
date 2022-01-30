class DT_ComponentContainer extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
  }
  createTemplate() {
    this.childs = [];
    let $componentContainer = $(document.createElement("div")).addClass(
      "component-container"
    );

    let component = new DT_Component(this.data);
    this.childs.push(component);

    let $subComponents = $(document.createElement("div")).addClass(
      "subComponents"
    );

    for (let subComponent of this.data.subComponents) {
      let _subComponent = new DT_ComponentContainer(subComponent);
      $subComponents.append(_subComponent.getTemplate());
      this.childs.push(_subComponent);
    }

    $componentContainer.append(component.getTemplate());
    $componentContainer.append($subComponents);
    return $componentContainer;
  }
}
