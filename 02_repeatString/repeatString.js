const repeatString = function(text, times) {

    if (times >= 0) {

        let para = "";

        for (let i = 0; i < times; i++) {
            para += text;
        }

        return para;

    } else {

        return "ERROR";

    }

    
};

// Do not edit below this line
module.exports = repeatString;
