class DOMTemplate {
  constructor(struct) {
    this.createTemplate(struct);
  }

  createTemplate(struct) {
    this.createTemplateStruct(struct);
  }

  createTag({ tagName, className, attributes, id, innerHTML, template }) {
    if (tagName == undefined && template == undefined) return;

    let $element = $(template ?? document.createElement(tagName));

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
    if (innerHTML != undefined) {
      $element.html(innerHTML);
    }

    return $element;
  }

  createTemplateStruct(struct, nose = true) {
    let isDomTemplate = struct.template instanceof DOMTemplate;
    let template = isDomTemplate ? struct.template : struct;

    this.template = isDomTemplate
      ? template.template
      : this.createTag(template);

    this.id = template.id;
    this.className = template.className;
    this.tagName = template.tagName;
    this.innerHTML = template.innerHTML;
    this.attributes = template.attributes;

    this.childs = (template.childs || []).map((child) => {
      if (child instanceof DOMTemplate) {
        return child;
      }
      if (child.template instanceof DOMTemplate) {
        return child.template;
      }
      return new DOMTemplate(child);
    });

    if (this.childs.length > 0) {
      this.template[0].innerHTML = "";
      this.childs.forEach((child) => {
        this.template.append(child.template);
      });
    }

    return this;
  }
}
