'use strict';

const curlyBrackets = module.exports = {};

curlyBrackets.check = function (string) { //check
  if (!string || typeof string !== 'string') return null;

  let stack = [];
  let strArray = string.split('');

  for (let i = 0; i < strArray.length; i++) { //check
    if (strArray[i] === '{') stack.push(strArray[i]);
    if (strArray[i] === '}') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  if (stack.length > 0) return false;
  return true;
};