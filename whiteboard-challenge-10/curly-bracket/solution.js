'use strict';

const Stack = require('./stack.js')
const solution = module.exports = {}

solution.checkBrackets = function (string) { //stacked strings
  if(typeof string !== 'string') { //checking for ''
    return null
  }
  let test = new Stack
  let array =  string.split('') //split all the characters
  for (let i=0; i < string.length; i++) { //looping through array
    if (array[i] === '{') {
      test.push(array[i]) //push  into new stack to check for following closing bracket
    }
    if (array[i] === '}') {
      if (test.size === 0) { //
        return 'shit dont add up fam...'
      }
      test.pop(array[i]);
    }
  }
  if (test.top === null) {
    return 'Braces match'
  }
}
