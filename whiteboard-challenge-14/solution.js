'use strict'
//make a new stack
const SLL = require('./lib/single-linked.js')
const Stack = require('./lib/stack.js')

module.exports = (head) => {

  let stacks = new Stack()
  for(let itr = head.head; itr ; itr =itr.next) { //changed head to head.head cuase daniel. correct if im worng
    stacks.push(head.val)
      if(Stack.peek !== itr.val) {
        stack.push(itr.val)
      }
    }
  let singleLink = new SLL()
  while (stack.size) {
    singleLink.insertHead(stacks.pop)
  }
  return singleLink.head
}


