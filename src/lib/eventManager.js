const eventMap = new Map();

export function setupEventListeners(root) {
  eventMap.forEach((handlers, eventType) => {
    root.addEventListener(eventType, (e) => {
      let target = e.target;

      while (target && target !== root) {
        handlers.forEach(({ element, handler }) => {
          if (element === target) {
            handler(e);
          }
        });
        target = target.parentElement;
      }
    });
  });
}

export function addEvent(element, eventType, handler) {
  if (!eventMap.has(eventType)) {
    eventMap.set(eventType, []);
  }

  eventMap.get(eventType).push({ element, handler });
}

export function removeEvent(element, eventType, handler) {
  if (!eventMap.has(eventType)) return;

  const handlers = eventMap.get(eventType);
  const index = handlers.findIndex((item) => {
    return item.element === element && item.handler === handler;
  });

  if (index !== -1) {
    handlers.splice(index, 1);
  }

  if (!handlers.length) {
    eventMap.delete(eventType);
  }
}
