const numbers = module.exports = {};

numbers.check = function (arr) {
    var first = arr.sort(function (a, b) { return b - a })[0];//get first highest number
    var second = arr.sort(function (a, b) { return b - a })[1]; //get second highest
    var highest = {
        first: first,
        second: second
    }; 
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return null;
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
