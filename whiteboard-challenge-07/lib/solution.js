const cycle = {
  head: {
    value: 7, next: {
      value: 9, next: {
        value: 12, next: {
          value: 15, next: {
            value: 0, next: null,
          }
        }
      }
    }
  }
}
//circle listed link call back below
// cycle.head.next.next.next.next.next = cycle.head;

let crazy = function (cycle) {
  let newCycle = Object.assign({}, cycle);
  for (let itr = newCycle.head; itr !== null; itr = itr.next) {
    console.log(itr)
    if (itr.hasOwnProperty('visited'))
      return true
    itr.visited = true
  }
  return false

}

crazy(cycle);




