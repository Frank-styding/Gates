class C_Scene extends Component {
  constructor(width, height) {
    super();
    this.display = new Display({ width, height });
    this.setCollider(new RectCollider(width, height));
    this.width = new State(width);
    this.height = new State(height);
    this.initUpdateFuncs();
  }
  initUpdateFuncs() {
    this.width.onUpdate(() => {
      this.display.setDim(this.width.value, this.height.value);
    });
    this.height.onUpdate(() => {
      this.display.setDim(this.width.value, this.height.value);
    });
  }
  _mouseDown(event) {
    console.log("---", event, "---");
  }
}
