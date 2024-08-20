const leapYears = function(year) {
    if(((year % 4) === 0)
        && ((year % 100) !== 0 || (year % 400 === 0))) {
        return true;
    } else {
        return false;
    }
};

// leap years:
// % 100 = FALSE
// % 400 = TRUE
// % 4 = TRUE

// Do not edit below this line
module.exports = leapYears;
