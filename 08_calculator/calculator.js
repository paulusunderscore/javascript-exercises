const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, arr) => total + arr, 0 );
};

const multiply = function(arr) {
  return arr.reduce((total, arr) => total * arr, 1 );
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let arr = [];
  if(num === 0){
    return 1;
  }
  for(let i = num; i > 0; i--){
    arr = arr.concat(i);
  }
  console.log('arr: '+arr);
  return arr.reduce((total, arr) => total * arr, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
