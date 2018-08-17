import TreeNode from "./TreeNode";

// shorthand for creating TreeNode or returning 'null'
const node = val => {
  return val === null ? null : new TreeNode(val);
};

export const deserialize = function(treeData) {
  if (treeData.length === 0) {
    return null;
  }

  const nodes = treeData.map(val => node(val));
  const kids = [...nodes];
  const head = kids.shift();

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

export const stratify = function(root) {};
