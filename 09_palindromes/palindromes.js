const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const stringFixed = string
    .toLowerCase()
    .split("")
    .filter(character => alphanumerical.includes(character))
    .join("");

    const stringReversed = stringFixed
    .split("")
    .reverse()
    .join("");

    return stringFixed === stringReversed;
};

// Do not edit below this line
module.exports = palindromes;
