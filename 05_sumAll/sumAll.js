const sumAll = function(firstNum, secondNum) {
    let total;
    // All ERROR checks
    if (firstNum < 0 ||
        secondNum < 0 ||
        Number.isInteger(firstNum) === false ||
        Number.isInteger(secondNum) === false ) {
        total = 'ERROR';
    } else {
        total = 0;
    }

    // Assigning start and finish
    if (firstNum < secondNum) {
        start = firstNum;
        finish = secondNum;
    } else {
        start = secondNum;
        finish = firstNum;
    }

    // Commencing the loop
    if(total == 'ERROR') {
        return total;
    } else {
        for(count = start; count <= finish; count++) {
            total += count;
            }
    }
    console.log(`First number is ${firstNum}, second number is ${secondNum},\n
        and your total is ${total}`)
    return total;
}

// Do not edit below this line
module.exports = sumAll;
