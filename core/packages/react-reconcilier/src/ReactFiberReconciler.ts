import { createFiberRoot } from "./ReactFiberRoot";

/**
 *    创建容器
 */
export function createContaienr(
  containerInfo: Element,
  tag: number | undefined,
  isStrictMode: boolean | undefined,
  concurrentUpdatesByDefaultOverride: boolean | null | undefined,
  identifierPrefix: string | undefined
) {
  return createFiberRoot(
    containerInfo,
    tag,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix
  );
}

/**
 * 更新
 */
export function updateContainer(
  element: any,
  container: any,
  parentComponent?: any,
  callback?: any
) {
  const current = container.current;
  // const eventTime = requestEventTime();

  // const context = getContextForSubtree(parentComponent);
  if (container.context === null) {
    container.context = context;
  } else {
    container.pendingContext = context;
  }

  // const update = cteateUpdate();
  update.payload = { element };
  // const root = enqueueUpdate(current, update, lane);
  if(root !null) {
    
  }
  return lane
}
