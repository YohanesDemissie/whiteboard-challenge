const sorted = [];

const newThing = {};

const sortAnagrams = ['acre', 'race', 'care', 'act', 'cat', 'tac'];


function splitString(sorted) {
  for (let val of sortAnagrams) {
    let letters = val.split('').sort().join(''); //
    sorted.push(letters);
    if (!newThing[letters]) newThing[letters] = []
    newThing[letters].push(val); //
    console.log('values', newThing[letters])
    //console.log(sorted);
  }


}
splitString(sorted)
console.log(newThing);