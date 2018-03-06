
var _ = require('underscore');

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function (value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function (value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

var TreeNodes = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 2,
      right: {
        value: 3,
        left: {
          value: 4
        }
      }
    }
  },
  right: {
    value: 1
  }
}

function buildTree(object) {
  if (typeof object === "undefined") return undefined;

  var parentNode = new BinaryTreeNode(object.value);
  parentNode.value = object.value;

  parentNode.left = buildTree(object.left);
  parentNode.right = buildTree(object.right);

  return parentNode;
}

var tree = buildTree(TreeNodes);

function depthSeparation(depths) {
  var min = depths[0];
  var max = depths[0];

  depths.forEach(function (depth) {

    if (depth < min) {
      min = depth;
    }

    if (depth > max) {
      max = depth;
    }
  });

  return max - min;
}

function isSuperBalanced(tree) {
  var depths = [];

  function traverse(node, depth) {
    if (typeof depth === "undefined") depth = 0;
    var children = _.compact([node.right, node.left])

    if (children.length > 0) {
      depth += 1;
      children.forEach(function (child) {
        traverse(child, depth);
      });
    } else {
      depths.push(depth);
    }
  }

  traverse(tree);
  return depthSeparation(depths) <= 1;
}

console.log(isSuperBalanced(tree));

var balancedTree = buildTree({
  value: 0,
  left: {
    value: 1
  },
  right: {
    value: 1
  }
});


console.log(isSuperBalanced(balancedTree));