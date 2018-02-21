'use strict';

const utils = module.export = {};
utils.Map = function (callback) { //callback holds the data to be altered
  let array = [];
  for (let i = 0; i < this.length; i++)
    array.push(callback(this[i], i, this)); //push the modified callback 
  return array; //return modified array
};
utils.Filter = function (callback, context) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this))
      array.push(this[i]);
  }
  return array;
},
  utils.Reduce = function (callback, initialValue) {
    let accumulator = (initialValue === undefined) ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined)
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      else
        accumulator = this[i];
    }
    return accumulator;
  };