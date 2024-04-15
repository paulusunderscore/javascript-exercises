const palindromes = function (text) {
    let newText = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    let noSpace = newText.toLowerCase().replace(/\s/g,'');
    if(noSpace===noSpace.split('').reverse().join('')){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
