import { cleanupElementEvents } from "./eventManager";
import { createElement } from "./createElement";

// function updateAttributes(target, originNewProps, originOldProps) {}

export function updateElement(parentElement, newNode, oldElement) {
  // 이벤트 제거
  cleanupElementEvents(oldElement);

  const newElement = createElement(newNode);
  parentElement.replaceChild(newElement, oldElement);
}
