let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let display = new Display(canvas, innerWidth, innerHeight);

let button = new C_Button(200, 200);
button.transform.model.translate(500, 500).rotate(45);
button._update();
console.log(button);
display.renderCollider(button, new Color(255, 0, 0, 255));
