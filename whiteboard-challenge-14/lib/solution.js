'use strict'
//make a new stack
const SLL = require('./single-linked.js')
const Stack = require('./stack.js')

module.exports = (head) => {

  let stacks = new Stack()
  let itr = head.next
  for(stacks.push(head.value); itr ; itr =itr.next) { //changed head to head.head cuase daniel. correct if im worng
    stacks.push(head.value)
      if(stacks.peek !== itr.value) {
        stacks.push(itr.value)
      }
    }
  let singleLink = new SLL()
  while (stacks.size) {
    singleLink.insertHead(stacks.pop)
  }
  return singleLink.head
}


