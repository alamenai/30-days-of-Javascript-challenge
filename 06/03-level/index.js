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

// Copy countries array(Avoid mutation)
const copiedCountries = countries.copyWithin(countries, 0, countries.length);
console.log(copiedCountries);

// Arrays are mutable. Create a copy of array which does not modify the original.
// Sort the copied array and store in a variable sortedCountries

const countriesCopyArr = [...countries];
const sortedCountries = countriesCopyArr.sort();
console.log(sortedCountries);

// Sort the webTechs array and mernStack array
const sortedWebTech = webTechs.sort();
const sortedMern = mernStack.sort();
console.log(sortedWebTech);
console.log(sortedMern);

// Extract all the countries contain the word 'land' from the countries array and print it as array
const hasLandArr = countries.filter((country) => country.includes("land"));
console.log(hasLandArrI)

// Exercices 5,6,7,8,9 have the same solution using filter, reduce ...