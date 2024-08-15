const reverseString = function(string) {
    let revString = '';
    for (count = string.length; count >= 0; count--) {
        revString = revString.concat(string.charAt(count))
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
