'use struct';

const array = require('..lib/solution.js');

describe('Array Module', function () {
    describe('#check', function () {
        it('this should make sure the array is full of numbers', function () {
            expect(aray.check[4, 77, 'l']).toEqual('not a number')
        })
        it('this should make sure the array does not contain an empty string', function () {
            expect(array.check[1, 9, '']).toEqual('contains empty string')
        })
        it('this should make sure the array has some content', function (){
            expect(array.check[]).toEqual('contains empty array')
        })
        it('this should make sure there are no floating numers', function () {
            expect(array.check[1, 7, 5.98]).toEqual('not an integer')
        })
    })
})

