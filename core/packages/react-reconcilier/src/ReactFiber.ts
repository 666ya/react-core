/*
 * @Author: 焦文儒 j_wrsummer@163.com
 * @Date: 2023-04-18 09:57:08
 * @LastEditors: 焦文儒 j_wrsummer@163.com
 * @LastEditTime: 2023-04-20 08:37:55
 * @FilePath: \core\packages\react-reconcilier\src\ReactFiber.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NoFlags } from "./ReactFiberFlag";
import { NoLanes } from "./ReactFiberLane";
import { ConcurrentRoot } from "./ReactRootTag";

type FiberNodeFn = {
  new (tag: any, pendingProps: any, key: any, mode: any): any;
};

const FiberNode: FiberNodeFn = (
  tag: any,
  pendingProps: any,
  key: any,
  mode: any
) => {
  // instance
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.stateNode = null;

  //Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;
  this.mode = mode;

  //Effects
  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;

  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  this.alternate = null;
};
/**
 *  创建fiber
 */
const createFiber = function (
  tag: any,
  pendingProps: null,
  key: null,
  mode: any
) {
  return new FiberNode(tag, pendingProps, key, mode);
};

export function createHostRootFiber(
  tag: number,
  isStrictMode: boolean,
  concurrentUpdatesByDefaultOverride: null | boolean
) {
  let mode;
  if (tag === ConcurrentRoot) {
    mode = ConcurrentRoot;
  }
  return createFiber(3, null, null, mode);
}
