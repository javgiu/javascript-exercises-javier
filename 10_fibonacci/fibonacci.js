const fibonacci = function(number) {
    const place = parseInt(number);

    if(place < 0) return "OOPS";
    if(place === 0) return 0;
    if(place === 1) return 1;
    let first = 1;
    let second = 0;
    let actualNumber = 0;

    for(let i = 1; i < place; i++) {
        actualNumber = first + second;
        second = first;
        first = actualNumber;
    }
    
    return actualNumber;
};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

// Do not edit below this line
module.exports = fibonacci;
