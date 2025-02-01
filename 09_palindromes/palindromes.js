const palindromes = function (string) {
    compare = string.split("")
        // then mapped all into lower case via map
        .map((i) => i.toLowerCase())
        // then filtered for non alphanumeric characters
        .filter((i) => 
            i.charCodeAt() > 96 && i.charCodeAt() < 123 || //lowercase alphabet
            i.charCodeAt() > 47 && i.charCodeAt() < 58); // 0-9
    return compare.join("") == compare.reverse().join("");
    // return compare.join("") == compare.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
