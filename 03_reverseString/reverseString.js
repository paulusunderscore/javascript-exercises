const reverseString = function(text) {
    let textContainer = "";
    let n = text.length;
    for (let i = 0; i < n; i++){
        textContainer += text.slice(-1);
        text = text.slice(0, -1);
    }
    return textContainer;
    return text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
