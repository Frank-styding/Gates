class DOMTemplate {
  constructor(struct) {
    this.templateStruct = {};
    this.template = this.createTemplate(struct);
  }

  createTemplate(struct) {
    let createTag = ({ tagType, className, attributes, id, innerHTML }) => {
      if (!tagType) return;

      let $element = $(document.createElement(tagType));

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
      context.template = createTag(struct);
      context.tagType = struct.tagName;
      context.className = struct.className;
      context.attributes = struct.attributes;
      context.innerHtml = struct.innerHtml;
      context.id = struct.id;
      context.childs = [];

      if (struct.childs) {
        struct.childs.forEach((child) => {
          let child_DOMtemplate = new DOMTemplate(child);
          context.template.append(child_DOMtemplate.template);
          context.childs.push(child_DOMtemplate);
        });
      }

      return context;
    };

    let context = createTemplateStruct(struct, this.templateStruct);
    return context.template;
  }
}
