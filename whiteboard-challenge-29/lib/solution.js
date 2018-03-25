
'use strict';

const solution = module.exports = {};
solution.sortAnagrams = function (array) {
  if (!array || array.length === 0) return 'No Content';
  const anagrams = {};
  array.map(element => {
    if (typeof element !== 'string') return;
    var sortedWord = element.split('').sort().join('');
    anagrams[sortedWord] ? anagrams[sortedWord].push(element) : anagrams[sortedWord] = [element];
  });
  let sortedArray = [];
  for (let property in anagrams) {
    anagrams[property].map(element => sortedArray.push(element));
  }
  return sortedArray;
};