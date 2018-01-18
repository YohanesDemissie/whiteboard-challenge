'use strict';
train = {
    "value": 2,
    "next": {
        "value": 16,
        "next": {
            "value": 7,
            "next": {
                "value": 7,
                "next": null
            }
        }
    }
}

const traverse = (train) => {
    let total = 0
    while (train.next !== null) { //loop until next=null
        console.log(train.value)  //this displays all values except the first
        total += train.value      //add total (0) to the train value
        train = train.next        //let train = "next"
    }
    console.log(train.value)      //this returns all the key values seperately
    return total + train.value;   //return total ADDED train values
}
traverse(train);                  //call back function
                        


