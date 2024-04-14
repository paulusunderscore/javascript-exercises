const palindromes = function (text) {
    let newText = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    let noSpace = newText.toLowerCase().replace(/\s/g,'');
    console.log('noSpace: ' + noSpace);
    console.log('A : ' + noSpace.toLowerCase());
    console.log('B : ' + noSpace.toLowerCase().split('').reverse().join(''));
    if(noSpace===noSpace.split('').reverse().join('')){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
