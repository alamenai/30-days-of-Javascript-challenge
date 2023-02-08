const countryList = require("../02-level/countries");

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort();
const minAge = Math.min(...sortedAges);
const maxAge = Math.max(...sortedAges);
console.log("The sorted array is:" + sortedAges);
console.log("The max age is:" + maxAge);
console.log("The min age is:" + minAge);

// Find the median age(one middle item or two middle items divided by two)
const medianAge = sortedAges[Math.floor(sortedAges.length / 2)];
console.log("The median age is:" + medianAge);

// Find the average age(all items divided by number of items)
const averageAge =
  sortedAges.reduce((acc, item) => {
    return (acc += item);
  }, 0) / sortedAges.length;
console.log("The average age is:" + averageAge);

// Find the range of the ages(max minus min)
const rangeAge = maxAge - minAge;
console.log(rangeAge);

// Slice the first ten countries from the countries array
const firstTen = countryList.slice(0, 10);
console.log(firstTen);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const modulo = countryList.length % 2;
let firstArray, secondArray;

modulo == 0
  ? ((firstArray = countryList.slice(0, countryList.length / 2)),
    (secondArray = countryList.slice(
      countryList.length / 2,
      countryList.length - 1
    )))
  : ((firstArray = countryList.slice(0, countryList.length / 2 + 1)),
    (secondArray = countryList.slice(
      countryList.length / 2 + 1,
      countryList.length - 1
    )));

console.log("The first half array:", firstArray);
console.log("The second half array:", secondArray);
