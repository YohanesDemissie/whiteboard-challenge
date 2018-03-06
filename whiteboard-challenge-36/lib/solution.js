const TreeNode = require('../binaryTree')

let isSameTree = function (bst, bstTwo) {
  console.log(bst, 'whyyy')

  if (!bst || !bstTwo) {
    return true;
  }
  if ((!bst && bstTwo) || (!bstTwo && bst) || (bst && bstTwo && bst.value !== bstTwo.value)) {
    //cosnsole.log(bst, 'asss')
    return false;
  }
  return (isSameTree(bst.left, bstTwo.left) && isSameTree(bst.right, bstTwo.right));
};