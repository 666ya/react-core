import { createRoot as createRootImpl } from "./";

function createRoot(container: Element, options?: any) {
  return createRootImpl(container, options);
}

const ReactDOM = {
  createRoot,
};
export default ReactDOM;
