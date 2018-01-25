
function LinkedList() {
  this.head = null; //head never has a value
}

LinkedList.prototype.push = function (val) {
  var node = { //create node with value and nested 'next' key value pairs
    value: val, //value 
    next: null //next == null if no following value
  }
  if (!this.head) {
    this.head = node; //since head is null, give it node content (value, next)
  }
  else {
    current = this.head;
    while (current.next) { //nests next: to the floowing listed objects
      current = current.next;
    }
    current.next = node; //nest the key value pairs within 'next'
  }
}

//create linked list based off constructor
let list = new LinkedList();
// add values to linked list
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
console.log(list, 'first LinkedList') //checking for values

let listIntercept = new LinkedList();
listIntercept.push(3)
listIntercept.push(5)
listIntercept.push(7)
listIntercept.push(9)
listIntercept.push(15)
console.log(listIntercept, 'second new thingy')

let stack = [];
//push
stack.push(list.head.value);  //returns value
stack.push(list.head.next.value);
stack.push(list.head.next.next.value);
stack.push(list.head.next.next.next.value);
stack.push(list.head.next.next.next.next.value);

//push 2nd linked list
stack.push(listIntercept.head.value); //returns value
stack.push(listIntercept.head.next.value);
stack.push(listIntercept.head.next.next.value);
stack.push(listIntercept.head.next.next.next.value);
stack.push(listIntercept.head.next.next.next.next.value);
stack;

var cache = {}; //iterator
var duplicates = [];

for (var i = 0, len = stack.length; i < len; i++) {
  if (cache[stack[i]] === true) {
    duplicates.push(stack[i]);
  } else {
    cache[stack[i]] = true;
  }

}
//console.log(duplicates); //displayes [3, 5]

let duplicateValues = new LinkedList()
duplicateValues.push(duplicates);
duplicateValues;











