class DT_PropertiesContainer extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
  }
  createTemplate() {
    this.childs = [];
    let $propietiesContainer = $(document.createElement("div")).addClass(
      "properties-container"
    );
    for (let property of this.data) {
      let _Propery = new DT_Property(property);
      $propietiesContainer.append(_Propery.getTemplate());
      this.childs.push(_Propery);
    }
    return $propietiesContainer;
  }
}
