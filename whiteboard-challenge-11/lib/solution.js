'use strict'

const findNum = module.exports = {};
findNum.check = function (array) {
  if(array == NaN) {
    return null
  }
  if(differnce >= 101) {
    return 'illegal integer'
  }
  if(missingNum !== difference) {
    return 'that dont work fam'
  }
var array = Array(100).fill(0).map((e, i) => e = i + 1); //1-100
console.log(array)

  let missingNum = array.splice(80, 1) //take away 81
  console.log(missingNum)

  var sum = array.reduce((a, b) => a + b, 0); //add it up to 5050
console.log(sum)

let difference = 5050 - sum; //find the difference 5050-4969
  console.log(difference)
return difference;
}
