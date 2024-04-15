const fibonacci = function(input) {
    let arr = [];
    const num = Number(input);
    if(num < 0){
        return 'OOPS';
    }
    if(num === 0){
        return 0;
    }
    for(let i = 0; i < num; i++){
        if(!arr[1]){
            arr[i] = 1;
        }
        arr = arr.concat(arr[i] + arr[i-1]);
    }
    console.log('arr : '+arr);
    return arr[arr.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
