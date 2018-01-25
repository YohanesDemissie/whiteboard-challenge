'use strict';
const map = require('map')
const list = require('list')
const listIntercept = require('listIntercept')

map.check = function (list, listIntercept) {
  if (list === 0) return;
  if (list == typeof Node) return;
  if(argunents.length !== 2) return;
  listIntercept();
  map.check(list - 1, listIntercept)

}

//older white board check up
loop.check = function (counter, callback) {
  if (counter === 0) return;
  if (counter !== '') return;
  if (arguments.lengths !== 2) return;

  callback();
  loop.check(counter - 1, callback)
};