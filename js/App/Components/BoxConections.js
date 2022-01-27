class C_BoxConections extends C_RoundedRect {
  constructor(name, width, height, roundedRect) {
    super(width, height, roundedRect);
    this.name = name;
    this.conections = { l: [], r: [], t: [], b: [] };
    this.conection_space_between = 30;
    //this.initUpdateFuncs();
  }
  addConection(conection, relativePos) {
    this.conections[relativePos].push(conection);
    this.addChild(conection);
    this.calcConectionPos();
  }
  calcConectionPos() {
    const width = this.width.value;
    const height = this.height.value;

    this.calcConectionPosRelative("t", -height / 2, true);
    this.calcConectionPosRelative("b", height / 2, true);
    this.calcConectionPosRelative("l", -width / 2, false);
    this.calcConectionPosRelative("r", width / 2, false);
  }
  calcConectionPosRelative(relativePos, constPos, reverse) {
    const c_length = this.conections[relativePos].length;
    const c_width = -((c_length - 1) * this.conection_space_between) / 2;
    for (let i = 0; i < c_length; i++) {
      this.conections[relativePos][i].transform.setValue((transform) => {
        let a = c_width + i * this.conection_space_between;
        let b = constPos;
        transform.model.setTranslation(reverse ? a : b, reverse ? b : a);
        return transform;
      });
    }
  }
  render() {
    super.render();
    this.display.text(
      this.width.value / 2,
      this.height.value / 2,
      "HOLA",
      new DisplayStyle({
        color: new Color(255, 0, 0),
        textStyle: new TextStyle({
          textAlign: "center",
          textBaseline: "middle",
          font: "30px Roboto",
        }),
      })
    );
  }
}
