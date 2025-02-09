const removeFromArray = function (array, ...valueToRemove) {
    for (const value of valueToRemove) {
        for (let i = 0; i < array.length; i++) {
            if (value === array[i]) {
                array.splice(i, 1);
                i--;
            }
            
        }
    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;

/* --- PLEASE CHECK THE SOLUTION */