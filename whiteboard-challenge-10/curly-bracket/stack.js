'use strict'

const Node = require('./node')

module.exports = class {
  constructor(maxSize = 1048) {
    this.top = null //this.head
    this.maxSize = maxSize //maximum nodes{objects}
    this.size = 0 //node{object} counter
  }
  push(val) {
    if (this.size === this.maxSize) throw new Error('Stack overflow!')

    let node = new Node(val)

    node.next = this.top
    this.top = node
    this.size++
    return this.top
  }

  pop() {
    let temp = this.top
    this.top = temp.next
    temp.next = null
    this.size-- //stacks backwards. so head eventually becomes tail

    return temp
  }

  peek() {
    return this.top //the head
  }
}
