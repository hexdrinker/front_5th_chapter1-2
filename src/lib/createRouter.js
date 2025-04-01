import { createObserver } from "./createObserver";
const BASE_PATH = import.meta.env.VITE_BASE_PATH;
export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const getFormattedPath = (path) => path.replace(BASE_PATH, "/");

  const getPath = () => getFormattedPath(window.location.pathname);

  const getTarget = () => routes[getPath()];

  const push = (path) => {
    window.history.pushState(null, null, getFormattedPath(path));
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
