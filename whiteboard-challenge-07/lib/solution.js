const cycle = {
  head: {
    value: 7, next: {
      value: 9, next: {
        value: 12, next: {
          value: 15, next: {
            next: this.head
          }
        }
      }
    }
  }
}

let crazy = function (cycle) {
  this.value = cycle.head.value
  this.next = cycle.head.next
  this.head = cycle.head
  while (cycle.next !== null) {
    console.log(this.next)
    cycle.head.next++
  }
}
//endless callback loop below
crazy(cycle)
