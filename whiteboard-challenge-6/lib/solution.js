'use strict';

const loop = module.exports = {};



 loop.check = function (counter, callback) {
  if (counter === 0 ) return;
  if(counter !== '') return;
  if(arguments.lengths !== 2) return;

  callback();
  loop.check(counter - 1, callback)
};

//TRIAL FUNCTION VERIFIED ON REPL
//    loop(10, () => {
//   console.log(counter);
// });