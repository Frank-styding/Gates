class DT_Property extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
  }
  createTemplate() {
    this.childs = [];

    let $property = $(document.createElement("div")).addClass("property");
    let $title = $(document.createElement("div")).addClass("title");
    let $subPropertiesContainer = $(document.createElement("div")).addClass(
      "subProperties-container"
    );

    $title.html(this.data.title);

    for (let subProperty of this.data.subProperties) {
      let _subProperty = new DT_SubProperty(subProperty);
      $subPropertiesContainer.append(_subProperty.getTemplate());
      this.childs.push(_subProperty);
    }

    $property.append($title);
    $property.append($subPropertiesContainer);
    return $property;
  }
}
