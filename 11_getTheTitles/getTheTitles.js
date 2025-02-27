const getTheTitles = function(array) {
    const arrayOfTitles = array.reduce((titles, current, index) => {
        titles[index] = current.title
        return titles;
    }, []);

    return arrayOfTitles;
};

// THE BEST 

// const getTheTitles = function (array) {
//     return array.map((book) => book.title);
//   };

// Do not edit below this line
module.exports = getTheTitles;
