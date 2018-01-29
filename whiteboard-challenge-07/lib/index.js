'use strict';

const solution = module.exports = {};

solution.cirr = function (SLL) {
  if (!SLL) return null;

  if (!Object.keys(SLL).length) return null;

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