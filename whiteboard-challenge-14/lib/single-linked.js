'use strict';

const Node = require('../node');
//const stack = require('./stack.js')

module.exports = SLL
class {
  constructor () {
    this.head = null
  }
  insertHead(val) {
    let node = new Node(val)
    node.next = this.head //alway start with head
    this.head = node //objectify the head 
    this.length++
    return this.head;
  }

  insertEnd(val) {
    if(!val && val !== 0) //check for values/content
    return this
    if(!this.length)
    return this.insertHead(val) //return head
    
    let node = new Node(val);
    for (var itr = this.head; itr.next; itr = itr.next)
    itr.next = node
    this.length++
    return this
  }
}
