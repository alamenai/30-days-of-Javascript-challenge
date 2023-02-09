// Declare a function fullName and it print out your full name.
const fullName = () => console.log("Menai Ala Eddine");

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const firstLast = (firstName, lastName) =>
  console.log(firstName + " " + lastName);

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (a, b) => a + b;

// An area of a rectangle is calculated as follows: area = length x width.
// Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => length * width;

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
// Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length, width) => (length + width) * 2;

// A volume of a rectangular prism is calculated as follows: volume = length x width x height.
// Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, height, width) => length * width * height;

// 7,8,9,10,11,12,13 have the same solution

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
  switch (month) {
    case [12, 1, 2].includes(month):
      return "Winter";
    case [3, 4, 5].includes(month):
      return "Spring";
    case [6, 7, 8].includes(month):
      return "Summer";
    case [9, 10, 11].includes(month):
      return "Autumn";
  }
};

// Math.max returns its largest argument.
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (arg1, arg2, arg3) => Math.max(arg1, arg2, arg3);
