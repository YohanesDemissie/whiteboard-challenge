'use strict'
//find the average
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
avg;

//find max
var numbers = [1, 2, 3, 4];
Math.max.apply(null, numbers);

//find min
var numbers = [1, 2, 3, 4];
Math.min.apply(null, numbers);