//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
  return new Date().toLocaleString("fr");
};

console.log(showDateTime());

// Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
  [y, x] = [x, y];
  return [x, y];
};

console.log(swapValues(1, 2));

// Declare a function name reverseArray.
// It takes array as a parameter and it returns the reverse of the array (don't use method).

const reversedArray = (arr) => {
  // Reversed without mutation
  let reversed = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    reversed.push(element);
  }
  return reversed;
};

console.log(reversedArray(["A", "B", "C"]));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (arr = []) =>
  arr.map((item) => typeof item === "string" && item.toUpperCase());

console.log(capitalizeArray(["hi", "welcome", "nice"])); // [ 'HI', 'WELCOME', 'NICE' ]

// 8,9,10,11,12,13 have the same solution

// Write a function which takes any number of arguments and return the sum of the arguments
const sumAll = (...args) => args.reduce((acc, num) => (acc += num), 0);
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(1, 2)); // 3

// 15,16,17,18 are made in previous days
