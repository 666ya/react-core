import { createContaienr } from "react-reconcilier/src/ReactFiberReconciler";
import { ConcurrentRoot } from "react-reconcilier/src/ReactRootTag";

type ReactDOMRoot = {
  new (internalRoot: any): void;
};

const ReactDOMRoot: ReactDOMRoot = function (internalRoot: any) {
  this._internalRoot = internalRoot;
};
// 定义render方法
ReactDOMRoot.prototype.type.rennder = (children) => {
  const root = this._internalRoot;
  // updateContainer(children, root, null, null);
};

export function createRoot(container: Element, options?: any) {
  const isStrictMode = false;
  const concurrentUpdatesByDefaultOverride = false;
  const identifierPrefix = "";
  const transitionCallbacks = null;
  const root = createContaienr(
    container,
    ConcurrentRoot,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix
  );
  // container标记为根元素
  // markContainerAsRoot(root.current, container);
  // 监听事件
  // listenToAllSupportedEvents(rootContainerElement);
  return new ReactDOMRoot(root);
}
