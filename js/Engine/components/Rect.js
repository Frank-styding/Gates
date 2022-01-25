class Rect extends Component {
  constructor(width, height) {
    super();
    this.display = new Display({ width, height });
    this.width = new State(width);
    this.height = new State(height);
    this.setCollider(new RectCollider(width, height, 0));
    this.initUpdateFuncs();
    this.render();
  }
  initUpdateFuncs() {
    this.width.addUpdateFunc(() => {
      this.display.setDim(this.width.value,this.height.value);
      this.render();
    });
    this.height.addUpdateFunc(() => {
      this.display.setDim(this.width.value,this.height.value);
      this.render();
    });
  }

  render() {
    this.display.clear();
    this.display.background(new Color(255,0,255))
  }
}
