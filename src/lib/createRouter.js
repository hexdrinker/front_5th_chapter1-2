import { createObserver } from "./createObserver";

export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const basePath = "/front_5th_chapter1-2/";

  const getPath = () => {
    const fullPath = window.location.pathname;
    return fullPath.startsWith(basePath)
      ? fullPath.slice(basePath.length) || "/"
      : fullPath;
  };

  const getTarget = () => routes[getPath()];

  const push = (path) => {
    window.history.pushState(null, null, `${basePath}${path}`);
    notify();
  };

  window.addEventListener("popstate", () => notify());

  return {
    get path() {
      return getPath();
    },
    push,
    subscribe,
    getTarget,
  };
};
