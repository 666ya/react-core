import { createRoot as createRootImpl } from "./src/client/ReactDOMRoot";
export function createRoot(container: Element, options?: any) {
  return createRootImpl(container, options);
}
