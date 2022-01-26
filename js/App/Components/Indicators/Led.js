class C_Led extends Component {
  constructor(width, height) {
    super();
    this.display = new Display({ width: width, height: height });
    this.width = new State(width);
    this.height = new State(height);
    this.value = new State(false);
    this.setCollider(new RectCollider(width, height));
    this.initUpdateFuncs();
    this.render();
  }
  initUpdateFuncs() {
    this.width.addUpdateFunc(() => {
      this.display.setDim(this.width.value, this.height.value);
      this.render();
    });
    this.height.addUpdateFunc(() => {
      this.display.setDim(this.width.value, this.height.value);
      this.render();
    });
    this.value.addUpdateFunc(() => {
      this.render();
    });
  }
  render() {
    this.display.clear();
    this.display.roundedRect(
      this.width.value / 2,
      this.height.value / 2,
      this.width.value,
      this.height.value,
      6,
      new DisplayStyle({
        fill: true,
        color: new Color(255, 255, 0),
      })
    );

  }
}
