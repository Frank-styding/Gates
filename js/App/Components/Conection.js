class C_Conection extends Component {
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
      this.render();
    });
  }
  render() {
    this.display.circle(
      this.radius.value,
      this.radius.value,
      this.radius.value,
      this.backgroudStyle.value
    );
  }
}
