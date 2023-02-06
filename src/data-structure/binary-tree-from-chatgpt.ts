class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  // Pre-order traversal
  preOrderTraversal(node: TreeNode | null, visitFn: (node: TreeNode) => void): void {
    if (!node) return;

    visitFn(node);
    this.preOrderTraversal(node.left, visitFn);
    this.preOrderTraversal(node.right, visitFn);
  }

  // In-order traversal
  inOrderTraversal(node: TreeNode | null, visitFn: (node: TreeNode) => void): void {
    if (!node) return;

    this.inOrderTraversal(node.left, visitFn);
    visitFn(node);
    this.inOrderTraversal(node.right, visitFn);
  }

  // Post-order traversal
  postOrderTraversal(node: TreeNode | null, visitFn: (node: TreeNode) => void): void {
    if (!node) return;

    this.postOrderTraversal(node.left, visitFn);
    this.postOrderTraversal(node.right, visitFn);
    visitFn(node);
  }
}

const bTree = new BinaryTree()

bTree.insert(10);
bTree.insert(5);
bTree.insert(15);
bTree.insert(3);
bTree.insert(7);
bTree.insert(12);
bTree.insert(17);

console.log('btree: ', bTree.root)

bTree.preOrderTraversal(bTree.root, (node) => console.log(node.value));
// Output: 10 5 3 7 15 12 17

// bTree.inOrderTraversal(bTree.root, (node) => console.log(node.value));
// Output: 3 5 7 10 12 15 17

// bTree.postOrderTraversal(bTree.root, (node) => console.log(node.value));
// Output: 3 7 5 12 17 15 10