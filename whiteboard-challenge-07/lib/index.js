'use strict';

const solution = module.exports = {};

solution.cirr = function (SLL) { //creating our constructor
  if (!SLL) return null; //error first

  if (!Object.keys(SLL).length) return null;//error first

  let SLL2 = Object.assign({}, SLL);

  let seen;

  while (SLL2.next) {
    if (SLL2.next.seen === true) return true;
    SLL2.seen = true;
    SLL2 = SLL2.next;
  }
  return false;
};
solution.cirr();

//