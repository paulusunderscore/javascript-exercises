const removeFromArray = function() {
    let array = [];
    for (let arg = 1; arg < arguments.length; arg++){
        for (let i = 0; i < arguments[0].length; i++){
            array = arguments[0];
            if (arguments[arg] === array[i]){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
