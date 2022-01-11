class C_Button extends Component {
  constructor(width, height) {
    super();
    this.className = "C_Button";
    this.state.setPropiety("width", width);
    this.state.setPropiety("height", height);
    this.collider = new RectCollider(this.pos, width, height);

    this.state.addUpdateFuncs(
      "width",
      (value) => (this.collider.width = value)
    );
    this.state.addUpdateFuncs(
      "height",
      (value) => (this.collider.height = value)
    );
  }
}
