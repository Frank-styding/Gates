let __ctx__ = document.createElement("canvas").getContext("2d");
function getCanvasTextWidth(text, font) {
  __ctx__.save();
  __ctx__.font = font;
  const width = __ctx__.measureText(text).width;
  __ctx.restore();
  return width;
}
