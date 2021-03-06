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
    let node = this.top
    this.top = node.next
    node.next = null
    this.size-- //stacks backwards. so head eventually becomes tail

    return node.val
  }

  peek() {
    return this.top.val //the head
  }
}