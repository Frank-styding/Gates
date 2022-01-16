class Slider extends Component {
  constructor(name, value, width, height) {
    super(name);
    this.display = new Display({ width, height });
    this.collider = new RectCollider(this.pos, width, height);
    this.state.setPropiety("value", () => value);
    this.state.setPropiety("width", () => width);
    this.state.setPropiety("height", () => height);
  }
  _initState() {
    this.state.addUpdateFuncs((name) => {
      if (["value", "width", "height"].indexOf(name) == -1) return;
      this.collider.set(this.state.getPropiety("width"),this.state.getPropiety("height"),0);
      this.display.setDim(this.state.getPropiety("width"),this.state.getPropiety("height"))
      this._render();
    });
  }
  _render() {
    
  }
  mouseMove(e){
      if(e.mouseIsDown){
          let width = this.state.getPropiety("width")

          (e.x - (this.pos.x - width/2) /width;
      }
  }
}
