const fibonacci = function(limit) {
    let array = []
    
    if(limit == 0) { return 0 };
    if(limit < 0) { return "OOPS" };

    for(i = 1; i <= limit; i++) {
        if(array.length < 2) {
            array.push(1);
        } else {
            array.push(array[i - 3] + array[i - 2]);
        }
    }
    return array[limit - 1];
};

// Do not edit below this line
module.exports = fibonacci;
