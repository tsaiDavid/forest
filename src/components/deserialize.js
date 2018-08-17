import TreeNode from "./TreeNode";

const test = [1, null, 2, 3];

const node = val => {
  return val === null ? null : new TreeNode(val);
};

const deserialize = function(treeData) {
  if (treeData.length === 0) {
    return null;
  }

  const nodes = treeData.map(val => node(val));
  const kids = [...nodes];
  let head = kids.shift();

  nodes.forEach(node => {
    if (node) {
      if (kids.length) {
        node.left = kids.shift();
      }

      if (kids.length) {
        node.right = kids.shift();
      }
    }
  });

  return head;
};

console.log(deserialize(test));
