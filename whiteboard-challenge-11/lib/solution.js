'use strict'

const findNum = module.exports = {};
findNum.check = function (array) {
let n = 80

var array = Array(100).fill(0).map((e, i) => e = i + 1); //1-100
//console.log(array)


  let missingNum = array.splice(n, 1) //filters 81
  console.log(missingNum)

  var sum = array.reduce((a, b) => a + b, 0); //add up the indecies (5050)
  //console.log(sum)

let difference = 5050-sum //find the difference between sum and new sum(-n)
  console.log(difference)
  // if (array == NaN) {
  //   return null
  // }
  // if (differnce >= 101) {
  //   return 'illegal integer'
  // }
  // if (missingNum !== difference) {
  //   return 'that dont work fam'
  // }
}
