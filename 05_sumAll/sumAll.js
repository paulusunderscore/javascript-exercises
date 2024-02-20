const sumAll = function(a, n) {
    let container = 0;
    if (n < a){
        container = a;
        a = n;
        n = container;
    }
    else if (a < 0 || n < 0 || typeof(a) === "string" ||
    typeof(n) === "string" || isNaN(a) || isNaN(n)){
        return "ERROR";
    }
    return ((n/2)*(2*a + (n-1)));
};

// Do not edit below this line
module.exports = sumAll;
