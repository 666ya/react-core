import { createRoot as createRootImpl } from "./ReactDOMRoot";
export function createRoot(container: Element, options?: any) {
  return createRootImpl(container, options);
}
