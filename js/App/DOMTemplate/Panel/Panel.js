class DT_Panel extends DOMTemplate {
  constructor(childs = []) {
    super({
      tagName: "div",
      className: "panel",
      childs: childs,
    });
  }
  _registerEvents() {
    console.log("hola");
  }
}
