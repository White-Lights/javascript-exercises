function removeFromArray(testArray, ...itemsRemoved) {
    let newArray = [ ];
    for (const item of testArray) {
        // console.log(itemsRemoved.indexOf(item))
        if (itemsRemoved.indexOf(item) == -1) {
            newArray.push(item);
        }
    }
    console.log("testArray is: " + testArray);
    console.log("Items to take out are :" + itemsRemoved);
    console.log("newArray is :" + newArray);
    return newArray;
    }

// Do not edit below this line
module.exports = removeFromArray;
