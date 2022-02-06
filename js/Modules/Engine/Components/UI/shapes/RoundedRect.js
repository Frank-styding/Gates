class C_RoundedRect extends Component {
  constructor(width, height, borderRadius) {
    super();
    this.display = new Display({ width: width, height: height });
    this.width = new State(width);
    this.height = new State(height);
    this.borderRadius = new State(borderRadius);
    this.backgroundStyle = new State(
      new DisplayStyle({ fill: true, color: new Color(20, 20, 20) })
    );
    this.setCollider(new RoundedRectCollider(width, height, borderRadius));
    this.initUpdateFuncs();
    this.render();
  }
  initUpdateFuncs() {
    this.width.addUpdateFunc(() => {
      this.display.setDim(this.width.value, this.height.value);
      this.collider.value.set(
        this.width.value,
        this.height.value,
        this.borderRadius.value
      );
      this.render();
    });
    this.height.addUpdateFunc(() => {
      this.display.setDim(this.width.value, this.height.value);
      this.collider.value.set(
        this.width.value,
        this.height.value,
        this.borderRadius.value
      );
      this.render();
    });
    this.borderRadius.addUpdateFunc(() => {
      this.render();
    });
    this.backgroundStyle.addUpdateFunc(() => {
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
      this.borderRadius.value,
      this.backgroundStyle.value
    );
  }
}
