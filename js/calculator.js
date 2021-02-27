const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  multi: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  minus: function (a, b) {
    return a - b;
  },
  squareRoot: function (a, b) {
    return a ^ b;
  },
};

const plus = calculator.plus(5, 5);
const multi = calculator.multi(5, 5);
const divide = calculator.divide(5, 5);
const minus = calculator.minus(5, 5);
const squareRoot = calculator.squareRoot(7, 5);
console.log(plus);
console.log(multi);
console.log(divide);
console.log(minus);
console.log(squareRoot);

//곱하기 나누기 빼기 제곱근
