import { RootTag } from "./ReactRootTag";
import { createHostRootFiber } from "./ReactFiber";
import { initializeUpdateQueue } from "./ReactFiberClassUpdateQueue";

type FiberRootNode = {
  new (containerInfo: any, tag: RootTag, identifierPrefix: string): any;
};

const FiberRootNode: FiberRootNode = function (
  this: any,
  containerInfo: any,
  tag: RootTag,
  identifierPrefix: string
) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.pendingChildren = null;
  this.current = null;
  this.context = null;
  this.identifierPrefix = identifierPrefix;
};
export function createFiberRoot(
  containerInfo: any,
  tag: RootTag,
  isStrictMode: boolean,
  concurrentUpdatesByDefaultOverride: null | boolean,
  identifierPrefix: string
) {
  const root = new FiberRootNode(containerInfo, tag, identifierPrefix);
  // fiberNode
  const uninitializedFiber = createHostRootFiber(
    tag,
    isStrictMode,
    concurrentUpdatesByDefaultOverride
  );
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;
  initializeUpdateQueue(uninitializedFiber);
  return root;
}
