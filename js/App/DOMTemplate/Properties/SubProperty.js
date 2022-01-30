class DT_SubProperty extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
  }
  createTemplate() {
    this.childs = [];
    let $subProperty = $(document.createElement("div")).addClass("subProperty");
    let $name = $(document.createElement("div")).addClass("name");
    let $inputs = $(document.createElement("div")).addClass("inputs");

    $name.html(this.data.name);

    for (let input of this.data.inputs) {
      let _inputContainer = new DT_InputContainer(input);
      $inputs.append(_inputContainer.getTemplate());
      this.childs.push(_inputContainer);
    }

    $subProperty.append($name);
    $subProperty.append($inputs);

    return $subProperty;
  }
}
