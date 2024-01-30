import type { DisplayObject } from '@antv/g';

/**
 * <zh/> 获取图形的所有子元素
 *
 * <en/> Get all the child elements of the shape
 * @param shape <zh/> 图形元素 | <en/> shape
 * @returns <zh/> 子元素数组 | <en/> child elements array
 */
export function getDescendantShapes<T extends DisplayObject>(shape: T) {
  const succeeds: DisplayObject[] = [];

  // 遍历所有子元素，并将子元素的子元素加入到数组中
  const traverse = (shape: DisplayObject) => {
    if (shape.children && shape.children.length) {
      (shape.children as DisplayObject[]).forEach((child) => {
        succeeds.push(child);
        traverse(child);
      });
    }
  };

  traverse(shape);

  return succeeds;
}
