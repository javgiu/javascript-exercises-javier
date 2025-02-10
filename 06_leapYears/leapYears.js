const leapYears = function(year) {
    if (!(year % 400) || year % 100  && !(year % 4))
        return true;
    else 
        return false;
};

// Do not edit below this line
module.exports = leapYears;

// See solution again