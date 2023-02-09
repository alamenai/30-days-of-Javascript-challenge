const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Develop a small script which generate any number of characters random id:

const generateAny = () => {
  let id = "";
  const randomLength = Math.random() * 100;
  for (let index = 0; index < randomLength; index++) {
    id += String.fromCharCode(
      Math.round(Math.random() * (57 - 48) + 48),
      Math.round(Math.random() * (122 - 97) + 97)
    );
  }
  return id;
};
console.log(generateAny());

// Write a script which generates a random hexadecimal number.

const toHex = () => {
  let id = "";
  const randomLength = Math.random() * 100;
  for (let index = 0; index < randomLength; index++) {
    id += Math.round(Math.random() * 127)
      .toString(16)
      .toUpperCase();
  }
  return id;
};
console.log(toHex());

// Write a script which generates a random rgb color number.

const rgb = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};

console.log(rgb());

// To Uppercase
countries.map((country) => country.toUpperCase());
console.log(countries);

// Using the above countries array, create an array for countries length'.
const lengths = [];
countries.forEach((country) => lengths.push(country.length));
console.log(lengths);

/**
 * Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
 */

const format = [];
countries.forEach((country) =>
  format.push([
    country.toUpperCase(),
    country.substring(0, 3).toUpperCase(),
    country.length,
  ])
);
console.log(format);

/**
 * In above countries array, check if there is a country or countries containing the word 'land'.
 * If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.u
 */

const landArr = [];
countries.forEach((value) => {
  if (value.match(/land/)) landArr.push(value);
});

landArr.length === 0
  ? console.log("All these countries are without land")
  : console.log(landArr);

/**
 * In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array.
 * If there is no country containing the word 'ai', print 'These are countries ends without ia'.
 */

const ia = [];
countries.forEach((value) => {
  if (value.match(/ia/)) ia.push(value);
});

ia.length === 0
  ? console.log("All these countries are without land")
  : console.log(ia);

// Using the above countries array, find the country containing the biggest number of characters.

let max = 0;
const maxCountry = countries.reduce((found, country) => {
  if (max < country.length) {
    max = country.length;
    found = country;
  }
  return found;
}, undefined);
console.log(maxCountry);

// Using the above countries array, find the country containing only 5 characters.

const fifthLength = countries.filter((country) => country.length === 5);
console.log(fifthLength);

// Find the longest word in the webTechs array

const maxWebTech = webTechs.reduce((found, tech) => {
  if (max < tech.length) {
    max = tech.length;
    found = tech;
  }
  return found;
}, undefined);
console.log(maxWebTech);

// Use the webTechs array to create the following array of arrays:
const mappedArr = webTechs.map((tech) => [tech, tech.length]);
console.log(mappedArr);

// An application created using MongoDB, Express, React and Node is called a MERN stack app.
// Create the acronym MERN by using the array mernStack

const acronym = mernStack.join(",");
console.log(acronym);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// using a for loop or for of loop and print out the items.

const techArr = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (const tech of techArr) {
  console.log(tech);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon']
// reverse the order using loop without using a reverse method.

const fruitArr = ["banana", "orange", "mango", "lemon"];
const reversedFruit = [];
for (let index = fruitArr.length - 1; index >= 0; index--) {
  const fruit = fruitArr[index];
  reversedFruit.push(fruit);
}
console.log(reversedFruit);

/**
 * Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
 */

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

console.table(fullStack.flat(1));
