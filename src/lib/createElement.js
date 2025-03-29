import { addEvent } from "./eventManager";

export function createElement(vNode) {
  if (vNode === null || vNode === undefined || typeof vNode === "boolean")
    return "";

  if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode(vNode);
  }

  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.children.forEach((child) => {
      const childElement = createElement(child);
      fragment.appendChild(childElement);
    });

    return fragment;
  }

  if (typeof vNode.type === "function") {
    const componentVNode = vNode.type({
      ...vNode.props,
      children: vNode.children,
    });
    return createElement(componentVNode);
  }
  const element = document.createElement(vNode.type);

  if (vNode.props) {
    updateAttributes(element, vNode.props);
  }

  vNode.children.forEach((child) => {
    if (!child) return;
    const childElement = createElement(child);
    if (childElement) {
      element.appendChild(childElement);
    }
  });

  return element;
}

function updateAttributes($el, props) {
  const propsKeys = Object.keys(props);

  for (const key of propsKeys) {
    if (typeof props[key] === "function") {
      console.log(key);
      const eventType = key.toLowerCase().substring(2);
      addEvent($el, eventType, props[key]);
    } else if (key === "className") {
      $el.setAttribute("class", props[key]);
    } else {
      $el.setAttribute(key, props[key]);
    }
  }
}
