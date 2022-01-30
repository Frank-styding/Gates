class DT_InputContainer extends DOMTemplate {
  constructor(data) {
    super();
    this.data = data;
    this.template = this.createTemplate();
  }
  createTemplate() {
    let $continerInput = $(document.createElement("div")).addClass(
      "container-input"
    );
    let $name = $(document.createElement("div")).addClass("name");
    let $input = $(document.createElement("input"));

    $name.html(this.data.name);

    $input.attr("id", this.data.id);
    $input.attr("type", this.data.type);

    $continerInput.append($name);
    $continerInput.append($input);

    return $continerInput;
  }
}
