const repeatString = function(string, num) {
    let newString = ''
    if (num < 0) {
        newString = 'ERROR';
        return newString;
    } else {
        for (count = 0; count < num; count++) {
        newString = newString.concat(string);
        }
    return newString;
    }
}

// Do not edit below this line
module.exports = repeatString;
