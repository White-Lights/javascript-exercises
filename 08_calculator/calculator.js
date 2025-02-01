const add = function(...args) {
  return args.reduce((total, current) => total += current);
};

const subtract = function(...args) {
	return args.reduce((total, current) => total -= current);
};

const sum = function(arg) {
  return arg.length !== 0 ? 
    arg.reduce((total, current) => total += current):
    0;
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total *= current);
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
