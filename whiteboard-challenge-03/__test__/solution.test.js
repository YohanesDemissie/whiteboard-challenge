'use struct';

const passengers = require('..lib/solutions.js');

describe('Train Module', function(){
    describe('#traverse', function (){
        it('this should return numer of people on train', function (){
            expect(train.value).toEqual(2)
        })
        it('this should return numer of people on train', function () {
            expect(train.value).toEqual(16)
        })
        it('this should return numer of people on train', function () {
            expect(train.value).toEqual(7)
        })
        it('this should return numer of people on train', function () {
            expect(train.value).toEqual(null)
        })
    })
}
// const array = require('../lib/solution.js');

// describe('Array Module', function () {
//     describe('#check', function () {
//         it('this should make sure the array is full of numbers', function () {
//             expect(array.check([4, 77, 'l'])).toEqual(null)
//         })
//         it('this should make sure the array does not contain an empty string', function () {
//             expect(array.check([1, 9, ''])).toEqual('contains empty string')
//         })
//         it('this should make sure the array has some content', function () {
//             expect(array.check([])).toEqual('contains empty array')
//         })
//         it('this should make sure it works with floating numbers', function () {
//             expect(array.check([1, 7, 5.98])).toEqual({ "first": 7, "second": 5.98 })
//         })
//     })
// })
