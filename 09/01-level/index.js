// High oreder functions are the functions that takes other function as a parameter. The function passed called callback

const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Explain the difference between forEach, map, filter, and reduce.

// forEach: Iterate an array elements. We use forEach only with arrays.
// It takes a callback function with elements, index parameter and array itself. The index and the array optional.

// map: Iterate an array elements and modify the array elements.
// It takes a callback function with elements, index , array parameter and return a new array.

// Filter: Filter out items which full fill filtering conditions and return a new array.

// Define a callback function before you use it in forEach, map, filter or reduce.

const callback = (item) => console.log(item);

// Use forEach to console.log each country in the countries array.
countries.forEach(callback);

// Use forEach to console.log each name in the names array.
names.forEach(callback);

// Use forEach to console.log each number in the numbers array.
numbers.forEach(callback);

// Use map to create a new array by changing each country to uppercase in the countries array.

const upperCaseCountries = countries.map((country) => country.toUpperCase());
console.log(upperCaseCountries);

// Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// Use map to create a new array by changing each number to square in the numbers array
const squauredNumbers = numbers.map((number) => number ** 2);
console.log(squauredNumbers);

// Use map to map the products array to its corresponding prices.
const mappedProducts = products.map(({ product, price }) => {
  return { [product]: price };
});

console.log(mappedProducts);

// Use filter to filter out countries containing land.
const hasLandWord = countries.filter((country) => country.match(/land/gi));
console.log(hasLandWord);

// Use filter to filter out countries having six character.
const hasSixChars = countries.filter((country) => country.length >= 6);
console.log(hasSixChars);

// Use filter to filter out country start with 'E';
const startWithE = countries.filter((country) =>
  country.toUpperCase().startsWith("E")
);
console.log(startWithE);

// Use filter to filter out only prices with values.
const onlyPrices = products.filter(({ price }) => price && price !== " ");
console.log(onlyPrices);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => arr.filter((item) => typeof item === "string");
console.log(getStringLists([1, "HI", 2]));

// Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, item) => (acc += item), 0);
console.log(sum);

// Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const sentence = countries.reduce((sentence, country) => {
  if (country.match(/iceland/gi))
    country = `and ${country} are north European countries`;
  return (sentence = sentence.concat(country, ","));
}, "");
console.log(sentence);

// Explain the difference between some and every

/**
 * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
 * It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
 * It doesn't modify the array.
 */

/**
 * The every() method tests whether all elements in the array pass the test implemented by the provided function.
 * It returns a Boolean value.
 */

// Use some to check if some names' length greater than seven in names array
const greaterThanSeven = () => names.some((name) => name.length > 7);
console.log(greaterThanSeven());

// Use every to check if all the countries contain the word land
const allHasLand = () => countries.every((country) => country.match(/land/gi));
console.log(allHasLand());

// Explain the difference between find and findIndex.

/**
 * The find() method returns the first element in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 */

/**
 * The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
 * If no elements satisfy the testing function, -1 is returned.
 */

// Use find to find the first country containing only six letters in the countries array
const firstHasSixChars = () =>
  countries.find((country) => country.length === 6);
console.log(firstHasSixChars());

// Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndex = () => countries.findIndex((country) => country.length === 6);
console.log(findIndex());

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = () =>
  countries.findIndex((country) => country.match(/norway/gi));
console.log(findNorway());

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const findIndexofRussia = () =>
  countries.findIndex((country) => country.match(/russia/gi));
console.log(findIndexofRussia());
