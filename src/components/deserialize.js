import TreeNode from "./TreeNode";

const test = [1, 2, 3];

const node = val => {
  return val === null ? null : new TreeNode(val);
};

const deserialize = function(treeData) {
  if (treeData.length === 0) {
    return null;
  }

  const nodes = treeData.map(val => node(val));
  let head = null;

  while (nodes.length) {
    let curr = nodes.shift();
    if (!head) {
      head = curr;
    }
    curr.left = nodes.shift();
    curr.right = nodes.shift();
  }

  return head;
};

console.log(deserialize(test));
