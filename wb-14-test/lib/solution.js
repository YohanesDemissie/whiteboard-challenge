'use strict';

const Stack = require('./stack');
const SLL = require('./sll');

// dedupe
module.exports = (head) => {
  if (!head) throw new Error('Error: head is falsey');

  let stack = new Stack();
  let itr = head.next;
  for (stack.push(head.value); itr; itr = itr.next) {
    if (stack.peek() !== itr.value) {
      stack.push(itr.value);
    }
  }

  let sll = new SLL();
  // Generate a singly link list from stack
  while (stack.size) {
    sll.insertHead(stack.pop());
  }

  // Return the head
  return sll.head;
};