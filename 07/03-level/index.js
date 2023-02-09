/**
 * Modify the userIdGenerator function.
 * Declare a function name userIdGeneratedByUser.
 * It doesn’t take any parameter but it takes two inputs using prompt().
 * One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
 */

const userIdGeneratedByUser = () => {
  // const numChars = prompt("Enter the number of characters:");
  // const idsCount = prompt("Enter the number of ids:");

  // Delete the above comment if you are in the browser
  const numChars = 5;
  const idsCount = 5;
  let idsArr = [];
  for (let i = 0; i < idsCount; i++) {
    let id = "";
    for (let j = 0; j < numChars; j++) {
      id += String.fromCharCode(
        Math.round(Math.random() * (57 - 48) + 48),
        Math.round(Math.random() * (122 - 97) + 97)
      );
    }

    idsArr.push(id);
  }
  return idsArr;
};
console.table(userIdGeneratedByUser());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
const arrayOfHexaColors = (totalColor) => {
  const hexColors = [];

  for (let index = 0; index < totalColor; index++) {
    const redHex = Math.round(Math.random() * 255).toString(16);
    const greenHex = Math.round(Math.random() * 255).toString(16);
    const blueHex = Math.round(Math.random() * 255).toString(16);
    hexColors.push(redHex + greenHex + blueHex);
  }
  return hexColors;
};

console.table(arrayOfHexaColors(5));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const arrayOfRgbColors = (totalColor) => {
  const rgbColors = [];

  for (let index = 0; index < totalColor; index++) {
    const redHex = Math.round(Math.random() * 255).toString();
    const greenHex = Math.round(Math.random() * 255).toString();
    const blueHex = Math.round(Math.random() * 255).toString();
    rgbColors.push(`(${redHex} , ${greenHex} , ${blueHex})`);
  }
  return rgbColors;
};
console.table(arrayOfRgbColors(5));

// 5,6,7 have the same implementation

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffle = (arr) => {
  let shffled = [];
  for (let iterator of arr) {
    iterator = arr[Math.floor(Math.random() * arr.length)];
    if (!shffled.includes(iterator)) {
      shffled.push(iterator);
    } else {
      while (shffled.includes(iterator)) {
        iterator = arr[Math.floor(Math.random() * arr.length)];
      }
      shffled.push(iterator);
    }
  }
  return shffled;
};

console.table(shuffle([1, 2, 4, 5, 8]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (num) => {
  if (num < 0) throw new Error("Your number should be positive");
  if (num == 0 || num == 1) return 1;
  else return num * factorial(num - 1);
};

console.log(factorial(6));

/**
 * Exercices from 10 to 19 have the same implementation
 */