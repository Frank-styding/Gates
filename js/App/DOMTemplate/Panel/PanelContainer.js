class DT_PanelContainer extends DOMTemplate {
  constructor(childs = []) {
    super({
      tagName: "div",
      className: "panel-container",
      childs: childs,
    });
  }
}
