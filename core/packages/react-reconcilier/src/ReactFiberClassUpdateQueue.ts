export function initializeUpdateQueue(fiber: any) {
  const queue = {
    baseState: fiber.memoizedState,
    firstBaseUpate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: null,
    },
    effects: null,
  };
  fiber.updateQueue = queue;
}
