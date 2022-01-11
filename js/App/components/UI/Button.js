class C_Button extends Component {
  constructor(width, height, color) {
    super();
    this.className = "C_Button";
    this.state.setPropiety("width", width);
    this.state.setPropiety("height", height);
    this.display = new Display({ width, height });
    this.collider = new RectCollider(this.pos, width, height);

    this.display.background(color);
  }
  initState() {
    /* this.state.addUpdateFuncs(
      "width",
      (value) => (this.collider.width = value)
    );
    this.state.addUpdateFuncs(
      "height",
      (value) => (this.collider.height = value)
    ); */
  }
}
