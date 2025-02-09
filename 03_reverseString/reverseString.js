const reverseString = function(text) {

    // Convert string to array
    const textArray = text.split("");

    const reverseArray = [];

    for (let i = (textArray.length - 1); i >=0 ; i--) {

        // Add array element from the last to the first
        reverseArray.push(textArray[i]);

    }

    // Return array as a string without separators
    return reverseArray.join("");

};
// Do not edit below this line
module.exports = reverseString;

/*
    Check the solution for a short solution
    
    return tet.split("").reverse().join("");
*/ 