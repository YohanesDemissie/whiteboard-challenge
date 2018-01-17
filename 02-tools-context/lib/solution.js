const array = [1, 2, 3, 4, 900];
var first = arr.sort(function (a, b) { return b - a })[0];//get first highest number
var second = arr.sort(function (a, b) { return b - a })[1]; //get second highest number
var highest = [first, second];

const array = module.exports = {};

array.check = function (arr) {
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return 'not a number';
        }
    }
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === '') {
            return 'contains empty string';
        }
    }
    for (i = 0; i >= arr.length; i++) {
        if (arr.length === 0) {
            return 'contains empty array';
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            return highest;
        } else {
            return 'not an integer';
        }
    }
    return highest;
}
arrCheck();