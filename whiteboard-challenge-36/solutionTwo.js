function isSuperBalancedBreadthFirst(tree) {
  var queue = [tree];
  var min = 0;
  var max = 0;
  var depth = 0;
  var elementsToDepthIncrement = queue.length;
  var elementsInNextDepth = 0;

  while (queue.length > 0) {
    var currentNode = queue.shift();
    var children = _.compact([currentNode.left, currentNode.right]);

    elementsToDepthIncrement -= 1;

    elementsInNextDepth += children.length;
    children.forEach(child => queue.push(child));

    if (!currentNode.left && !currentNode.right) {
      if (min === 0) {
        min = depth;
      }

      max = depth;
    }

    if (elementsToDepthIncrement === 0) {
      depth += 1;
      elementsToDepthIncrement = elementsInNextDepth;
      elementsInNextDepth = 0;
    }
  }

  return max - min <= 1;
}

console.log(isSuperBalancedBreadthFirst(tree));
console.log(isSuperBalancedBreadthFirst(balancedTree));