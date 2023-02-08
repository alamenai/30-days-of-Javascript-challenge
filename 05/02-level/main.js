const webTech = require("./web_tech");
const countryList = require("./countries");

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// Remove all ponctutions
const withoutPonct = text.split(/,|\./g).join("");

// Convert the string to array
const toArray = withoutPonct.split(" ");
console.log(Array.from(toArray));

// Words count
const wordsCount = toArray.length;
console.log(wordsCount);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes("Meat") ? shoppingCart.unshift("Meat") : shoppingCart;

// Add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes("Meat") ? shoppingCart.push("Meat") : shoppingCart;

// Remove Honey item
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

// Remove Honey item with filter method
shoppingCart.filter((value) => value != "Honey");

// Modify Tea to 'Green Tea'
shoppingCart.map((item) => (item === "Tea" ? (item = "Green Tea") : item));

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.

const ethiopia = "Ethiopia";
countryList.includes(ethiopia)
  ? console.log(ethiopia.toUpperCase())
  : countryList.push(ethiopia);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

const sassTech = "SASS";
webTech.includes(sassTech)
  ? console.log("SASS is a CSS preprocess")
  : (webTech.push(sassTech), console.log(webTech));

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
