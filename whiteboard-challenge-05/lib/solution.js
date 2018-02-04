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

let findMiddle = function (train) {
  let length = 0;
  let link = train;

  while (link.next !== null) {
    length++
    link = link.next;
  }
  link = train;
  let half = ~~(length / 2);
  while (half !== 0) {
    half--;
    link = link.next;
  }
  return link;
}

findMiddle(train);
