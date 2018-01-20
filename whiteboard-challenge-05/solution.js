
var train = {
  "value": 1,
  "next": {
    "value": 2,
    "next": {
      "value": 3,
      "next": {
        "value": 4,
        "next": {
          "value": 5,
          "next": null
        }
      }
    }
  }
}

const traverse = (train) => {
  let length = 0;
  let node = train;
  while (node.next !== null) {
    length++;
    node = node.next;
  }
  node = train;
  let halfway = ~~(length / 2);
  while (halfway !== 0) {
    halfway--;
    node = node.next;
  }
  return node;
}

traverse(train);

