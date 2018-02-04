'use strict';

const Node = require('./node');

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(value) {
    let node = new Node(value);
    node.next = this.head; 
    this.head = node;
    this.length++;
    return this;
  }
}

module.exports = SLL;