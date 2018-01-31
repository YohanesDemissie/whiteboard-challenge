'use strict';

const Node = require('../node');


// Creates a queue implemented with two stacks.

module.exports = class {
  constructor () {
  this.inbox = [];
  this.outbox = [];
}


 //Push a value to the queue.
 //param {*} value The value to push.
push(value) {
  console.log(typeof value);
  if(typeof value !== 'number')return NaN;
  else this.inbox.push();
};

// Pops a value from the queue and returns it.
// @return {*} The popped value.
pop() {
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};
}

//STACK is a LIFO Constructor: Last IN First OUT
//QUEUEU is a FIFO: First IN Fist OUT
//PEEK returns whatever is at the top