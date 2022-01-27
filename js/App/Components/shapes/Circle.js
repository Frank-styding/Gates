class C_Circle extends Component {
  constructor(radius) {
    super();
    this.display = new Display({ width: radius * 2, height: radius * 2 });
    this.radius = new State(radius);
    this.backgroudStyle = new State(
      new DisplayStyle({
        fill: true,
        color: new Color(157, 161, 158),
      })
    );
    this.setCollider(new CircleCollider(radius));
    this.initUpdateFuncs();
    this.render();
  }
  initUpdateFuncs() {
    this.radius.addUpdateFunc(() => {
      this.display.setDim(this.radius.value * 2, this.radius.value * 2);
      this.collider.value.set(this.radius.value);
      this.render();
    });
  }
  render() {
    this.display.clear();
    this.display.circle(
      this.radius.value,
      this.radius.value,
      this.radius.value,
      this.backgroudStyle.value
    );
  }
}
