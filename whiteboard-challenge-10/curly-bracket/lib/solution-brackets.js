'use strict';

const Stack = require('./stack-constructor.js');
const brackets = module.exports = {};

brackets.check = function (string) { //stacked strings
  if(typeof string !== 'string') { //checking for ''
    return null;
  }
  let test = new Stack;
  let array =  string.split(''); //split all the characters

  for (let i = 0; i < string.length; i++) { //looping through array
    if (array[i] === '{') {
      test.push(array[i]); //push  into new stack, adding 1 to 'size', to check for following closing bracket
    }
    if (array[i] === '}') {
      if (test.size === 0) { //if closing tag appears without any content...
        return false; //
      }
      test.pop(array[i]);
    }
  }
  if (test.top === null) {
    return true;
  }
};
