class Display {
  constructor({ canvas, width, height } = {}) {
    if (canvas != undefined) {
      this.canvas = canvas;
    } else {
      this.canvas = document.createElement("canvas");
    }
    if (width != undefined) {
      this.canvas.width = width;
    }
    if (height != undefined) {
      this.canvas.height = height;
    }
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx = this.canvas.getContext("2d");
  }
  setDim(width, height) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.width = width;
    this.height = height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  background(displayStyle) {
    this.ctx.save();
    displayStyle.setCanvasStyle(this.ctx);
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.restore();
  }
  text(x, y, text, font, displayStyle) {
    this.ctx.save();
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.font = font;
    displayStyle.setCanvasStyle(this.ctx);
    this.ctx.fillText(text, x, y);
    this.ctx.restore();
  }
  circle(x, y, r, displayStyle) {
    this.ctx.save();
    this.ctx.beginPath();
    displayStyle.setCanvasStyle(this.ctx);
    this.ctx.arc(x, y, r, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }
  rect(x, y, width, height, displayStyle) {
    this.ctx.save();
    displayStyle.setCanvasStyle(this.ctx);
    this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
    this.ctx.restore();
  }

  renderComponent(component, model = false, center = false) {
    this.ctx.save();

    if (center) {
      this.ctx.transform(1, 0, 0, 1, this.width / 2, this.height / 2);
    }
    if (model) {
      component.transform.model.setCanvasTransform(this.ctx);
    } else {
      component.transform.getTransform().setCanvasTransform(this.ctx);
    }
    const dislpay = component.display;
    if (dislpay) {
      this.ctx.drawImage(
        dislpay.canvas,
        -dislpay.width / 2,
        -dislpay.height / 2
      );
    }
    this.ctx.restore();
  }
  renderCollider(component, strokeColor) {
    this.ctx.save();
    component.transform.getTransform().setCanvasTransform(this.ctx);
    this.ctx.strokeStyle = strokeColor.toStyleCanvas();
    this.ctx.lineWidth = 2;
    const collider = component.collider;
    if (collider) {
      switch (collider.className) {
        case "CircleCollider":
          this.ctx.beginPath();
          this.ctx.arc(0, 0, collider.r, 0, Math.PI * 2);
          this.ctx.stroke();
          break;
        case "RectCollider":
          this.ctx.strokeRect(
            -collider.width / 2,
            -collider.height / 2,
            collider.width,
            collider.height
          );
          break;
        case "PathCollider":
          this.ctx.beginPath();
          let count = 0;
          for (let pos of collider.path) {
            const [x, y] = pos;
            if (count == 0) {
              this.ctx.moveTo(x, y);
              count++;
            } else {
              this.ctx.lineTo(x, y);
            }
          }
          this.ctx.closePath();
          this.ctx.stroke();
          break;
      }
      this.ctx.restore();
      for (const child of component.childs) {
        this.renderCollider(child, strokeColor);
      }
    }
  }
}
