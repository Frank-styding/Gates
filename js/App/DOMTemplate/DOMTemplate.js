class DOMTemplate {
  constructor(struct) {
    this.templateStruct = {};
    this.template = this.createTemplate(struct);
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
      let getTemplate = (struct) => {
        if (struct.template instanceof DOMTemplate) {
          return struct.template.template;
        }
        if (this.isDOMElement(struct.template)) {
          return createTag({ template: struct.template, ...struct });
        }
        return createTag(struct);
      };
      let getClassName = (struct) => {
        if (struct.template instanceof DOMTemplate) {
          return struct.template.templateStruct.className;
        }
        if (this.isDOMElement(struct.template)) {
          return struct.template.className;
        }
        return struct.className;
      };
      let getId = (struct) => {
        if (struct.template instanceof DOMTemplate) {
          return struct.template.templateStruct.id;
        }
        if (this.isDOMElement(struct.template)) {
          return struct.template.id;
        }
        return struct.id;
      };
      let getTagName = (struct) => {
        if (struct.template instanceof DOMTemplate) {
          return struct.template.templateStruct.tagName;
        }
        if (this.isDOMElement(struct.template)) {
          return struct.template.tagName.toLowerCase();
        }
        return struct.tagName;
      };
      let getInnerHtml = (struct) => {
        if (struct.template instanceof DOMTemplate) {
          return struct.template.templateStruct.innerHTML;
        }
        if (this.isDOMElement(struct.template)) {
          return struct.template.innerHTML;
        }
        return struct.innerHTML;
      };
      let getAttributes = (struct) => {
        if (struct.template instanceof DOMTemplate) {
          return struct.template.templateStruct.attributes;
        }
        return struct.attributes;
      };

      let getChilds = (struct) => {
        if (struct.template instanceof DOMTemplate) {
          return struct.template.templateStruct.childs;
        }
        let aux = [];
        if (struct.childs) {
          struct.childs.forEach((child) => {
            aux.push(new DOMTemplate(child));
          });
        }
        return aux;
      };

      context.template = getTemplate(struct);
      context.className = getClassName(struct);
      context.tagName = getTagName(struct);
      context.innerHTML = getInnerHtml(struct);
      context.id = getId(struct);
      context.attributes = getAttributes(struct);
      context.childs = getChilds(struct);

      if (context.childs.length > 0) {
        context.template.html("");
        context.childs.forEach((child) => {
          context.template.append(child.template);
        });
      }

      return context;
    };

    let context = createTemplateStruct(struct, this.templateStruct);
    return context.template;
  }
}
