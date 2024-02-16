const repeatString = function(text, num) {
    let finalText ="";
    if(num < 0){
        finalText = "ERROR";
    }
    for(let i = 0; i < num; i++){
        finalText += text;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
