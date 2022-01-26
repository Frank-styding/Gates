class Display {
  constructor({ width, height, canvas } = {}) {
    this.canvas = canvas ?? document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.width = width ?? this.canvas.width;
    this.height = height ?? this.canvas.height;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setDim(width, height) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.width = height;
    this.height = height;
    return this;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  background(color) {
    this.ctx.save();
    this.ctx.fillStyle = color.toCanvasStyle();
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.restore();
  }

  rect(x, y, width, height, displayStyle) {
    this.ctx.save();
    displayStyle.setToContext(this.ctx);
    displayStyle.fill
      ? this.ctx.fillRect(x - width / 2, y - height / 2, width, height)
      : this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
    this.ctx.restore();
  }
  roundedRect(x, y, width, height, borderRadius, displayStyle) {
    this.ctx.save();
    displayStyle.setToContext(this.ctx);

    this.ctx.moveTo(x - width / 2 + borderRadius, y - height / 2);
    this.ctx.lineTo(x + width / 2 - borderRadius, y - height / 2);
    this.ctx.arc(
      x + width / 2 - borderRadius,
      y - height / 2 + borderRadius,
      borderRadius,
      (Math.PI * 3) / 2,
      0
    );

    this.ctx.lineTo(x + width / 2, y + height / 2 - borderRadius);
    this.ctx.arc(
      x + width / 2 - borderRadius,
      y + height / 2 - borderRadius,
      borderRadius,
      0,
      Math.PI / 2
    );
    this.ctx.lineTo(x - width / 2 + borderRadius, y + height / 2);
    this.ctx.arc(
      x - width / 2 + borderRadius,
      y + height / 2 - borderRadius,
      borderRadius,
      Math.PI / 2,
      Math.PI
    );
    this.ctx.lineTo(x - width / 2, y - height / 2 + borderRadius);
    this.ctx.arc(
      x - width / 2 + borderRadius,
      y - height / 2 + borderRadius,
      borderRadius,
      Math.PI,
      (Math.PI * 3) / 2
    );
    displayStyle.fill ? this.ctx.fill() : this.ctx.stroke();

    this.ctx.restore();
  }

  circle(x, y, radius, displayStyle) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI, false);
    displayStyle.fill ? this.ctx.fill() : this.ctx.stroke();
    this.ctx.restore();
  }

  path(path, displayStyle, closePath = true) {
    this.ctx.save();
    let start = true;
    for (const vec of path) {
      if (start) {
        this.ctx.moveTo(vec.x, vec.y);
        start = false;
      }
      this.ctx.lineTo(vec.x, vex.y);
    }
    if (closePath) {
      this.ctx.closePath();
    }
    displayStyle.fill ? this.ctx.fill() : this.ctx.stroke();
    this.ctx.restore();
  }

  drawImage(x, y, image, displayStyle) {
    this.ctx.save();
    displayStyle.setToContext(this.ctx);
    this.ctx.drawImage(image, x - image.width / 2, y - image.height / 2);
    this.ctx.restore();
  }

  renderComponent(component) {
    if (component.display) {
      this.ctx.save();
      component.transform.value
        .getTransformMatrix()
        .setToContextTransform(this.ctx);

      this.ctx.drawImage(
        component.display.ctx.canvas,
        -component.display.ctx.canvas.width / 2,
        -component.display.ctx.canvas.height / 2
      );
      this.ctx.restore();
    }
    for (const child of component.childs) {
      this.renderComponent(child);
    }
  }

  renderCollider(component, displayStyle) {
    if (component.collider.value) {
      const collider = component.collider.value;

      this.ctx.save();

      component.transform.value
        .getTransformMatrix()
        .setToContextTransform(this.ctx);

      switch (collider.className) {
        case "RectCollider":
          this.rect(0, 0, collider.width, collider.height, displayStyle);
          break;
        case "CircleCollider":
          this.circle(0, 0, collider.r, displayStyle);
          break;
        case "PathCollider":
          this.path(collider.path, displayStyle);
          break;
        default:
          return;
      }

      this.ctx.restore();
    }
    for (const child of component.childs) {
      this.renderCollider(child, displayStyle);
    }
  }
}
