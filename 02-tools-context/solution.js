const arr = [1, 2, 3, 4];
//const arr = [1, 2, 3, 'l', 4]; testing for NaN
//const arr = [1, 2, 3, '', 4]; testing for empty string

var first = arr.sort(function (a, b) { return b - a })[0];//get first highest number
var second = arr.sort(function (a, b) { return b - a })[1]; //get second highest number
var highest = [first, second];

function numberCheck() {
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return 'not a number';
        }
    }
    return highest;
}
numberCheck();

//testing for empty string
function emptyString() {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === '') {
            return 'contains empty string';
        }
    } return height;
}
emptyString();

//testing for empty array
function emptyArray() {
    for (i = 0; i >= arr.length; i++) {
        if (arr.length === 0) {
            return 'contains empty array';
        }
    } return highest;
}

emptyArray();

//testing for decimals
function floatingNumber() {
    for (i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            return highest;
        } else {
            return 'not an integer';
        }
    }
}
floatingNumber();

