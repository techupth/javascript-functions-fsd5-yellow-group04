let calculator = {
  add: (number_a, number_b) => {
    const result = number_a + number_b;
    return result;
  },
  substract: (number_a, number_b) => {
    const result = number_a - number_b;
    return result;
  },
  multiply: (number_a, number_b) => {
    const result = number_a * number_b;
    return result;
  },
  divide: (number_a, number_b) => {
    const result = number_a / number_b;
    return result;
  },
};

let addRusult = calculator.add(10, 20);
console.log(addRusult);
let divideRusult = calculator.divide(3000, 10);
console.log(divideRusult);
