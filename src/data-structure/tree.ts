/*
* Definition: Binary Tree Node
*
*/
export interface ITreeNode<T> {
  data: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

export class TreeNode<T> implements ITreeNode<T> {
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;

  constructor(public data: T, left?: ITreeNode<T>, right?: ITreeNode<T>) {
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export class BinaryTree<TreeNode> {
  root: TreeNode
}