'use strict';

const string = string + '';
// const words = string.split(' ');

const solution = module.exports = function (string) {
  let words = string.split(' ');
    // let string = string.split(' ') //split by space
    let max = 0; //counter
    let highest = ''; //return highest string(word)
  for (let i = 0; i < words.length; i++) {
    let s = words[i]; //current
     let value = 0; //comparing value
    for (let j = 0; j < s.length; j++) {
      value += (s.charCodeAt(j) - 96); //pre-written expression that gives letters a numeric value
    }
    if (value > max) {
      max = value;
      highest = s;
    }
  }
  return highest;
};