const countriesList = require("../countries");

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = () => {
  return products
    .map((product) => product.price)
    .filter((price) => typeof price === "number")
    .reduce((total, price) => (total += price));
};

console.log(totalPrice());

// Find the sum of price of products using only reduce reduce(callback))

const sumPrice = () => {
  return products.reduce((sum, { price }) => {
    if (typeof price === "number") {
      sum += price;
    }
    return sum;
  }, 0);
};

console.log(sumPrice());

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries
// array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const categorizeCountries = () =>
  countriesList.filter((country) => country.name.match(/land/gi));
console.log(categorizeCountries());

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = () => countriesList.slice(0, 10);

console.log(getFirstTenCountries());

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

const whichLetter = () =>
  countriesList
    .map((country) => country.name.charAt(0))
    .reduce((acc, curr) => {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
console.log(whichLetter());
