let canvas = document.createElement("canvas");
let display = new Display({width:innerWidth,height:innerHeight,canvas:canvas})
let rect = new Rect(200,200);
let controller = new Controller(canvas);

document.body.appendChild(canvas);
let lastCalledTime,fps;

function loop(){
  display.clear();
  display.background(new Color(0,0,0,0));
  display.drawImage(20,20,rect.display.canvas,new DisplayStyle())

  if(!lastCalledTime){
    lastCalledTime = Date.now();
    fps = 0;
  }else{
    let delta = (Date.now() - lastCalledTime) / 1000;
    lastCalledTime = Date.now();
    fps = 1 / delta;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

