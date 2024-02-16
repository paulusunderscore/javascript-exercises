const reverseString = function(text) {
    let textContainer = "";
    for (let i = 0; i < text.length; i++){
        textContainer += text.slice(-1);
        text = text.slice(0, -1);
    }
    return textContainer;
};

// Do not edit below this line
module.exports = reverseString;
