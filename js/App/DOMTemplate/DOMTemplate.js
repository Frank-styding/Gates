class DOMTemplate {
  constructor(struct) {
    this.createTemplate(struct);
  }

  isDOMElement(o) {
    return typeof HTMLElement === "object"
      ? o instanceof HTMLElement //DOM2
      : o &&
          typeof o === "object" &&
          o !== null &&
          o.nodeType === 1 &&
          typeof o.nodeName === "string";
  }

  _registerEvents() {}
  registerEvents() {
    this._registerEvents();
    this.childs.forEach((child) => {
      child.registerEvents();
    });
  }

  createTemplate(struct) {
    let createTag = ({
      tagName,
      className,
      attributes,
      id,
      innerHTML,
      template,
    }) => {
      if (tagName == undefined && template == undefined) return;
      let $element = $(template ?? `<${tagName}></${tagName}>`);

      if (className) {
        $element.addClass(className);
      }

      if (id) {
        $element.attr("id", id);
      }

      if (attributes) {
        Object.keys(attributes).forEach((attributeName) => {
          $element.attr(attributeName, attributes[attributeName]);
        });
      }

      if (innerHTML) {
        $element.html(innerHTML);
      }

      return $element;
    };

    let createTemplateStruct = (struct, context = {}) => {
      context.childs = [];

      if (struct.template instanceof DOMTemplate) {
        let template = struct.template;
        context.template = template.template;
        context.id = template.id;
        context.className = template.className;
        context.tagName = template.tagName;
        context.innerHTML = template.innerHTML;
        context.attributes = template.attributes;
        context.childs = template.childs;
      } else {
        context.template = createTag(struct);
        context.id = struct.id;
        context.className = struct.className;
        context.tagName = struct.tagName;
        context.innerHTML = struct.innerHTML;
        context.attributes = struct.attributes;

        if (struct.childs) {
          context.childs = struct.childs.map((child) => {
            if (child.template instanceof DOMTemplate) {
              return child.template;
            }
            return new DOMTemplate(child);
          });
        }
      }

      if (context.childs.length > 0) {
        context.template.html("");
        context.childs.forEach((child) => {
          context.template.append(child.template);
        });
      }

      return context;
    };
    createTemplateStruct(struct, this);
  }
}
