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

// Empty array
const emptyArray = [];

// Array with more than 5 elements
const fifthArray = [1, 2, 3, 4, 5, 6];

// Get the length
const length = fifthArray.length;

// Get the items by position
const firstElement = fifthArray[0];
const middleElement = fifthArray[Math.floor(fifthArray.length / 2)];
const lastElement = fifthArray[fifthArray.length - 1];

// Fill an array with different data types
const mixedDataTypes = [
  1,
  true,
  "Happiness",
  null,
  undefined,
  Number.MAX_SAFE_INTEGER,
  NaN,
];

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies); //  List of companies
console.log(itCompanies.length); // Number of companies

const firstCompany = itCompanies[0];
const middlleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];

console.log(firstCompany + "|" + middlleCompany + "|" + lastCompany);

// Print out each company
itCompanies.forEach((company) => {
  console.log(company);
});

// Change each company name to uppercase one by one and print them out
const upperCaseCompanies = itCompanies.map((company) => {
  return company.toUpperCase();
});

console.log(upperCaseCompanies);

// Print as a sentence
console.log(itCompanies.join(","));

// Check the company existance
itCompanies.includes("Netlix")
  ? console.log("Netflix")
  : console.log("Company not found");

// Filter the array without filter method

const filteredCompanies = [];
for (let index in itCompanies) {
  if (itCompanies[index].match(/o{2}/g)) {
    filteredCompanies.push(itCompanies[index]);
  }
}
console.log(filteredCompanies);

// Sort an array using sort()
itCompanies.sort();
console.log(itCompanies);

// Reverse the array
console.log(itCompanies.reverse());

// Slice out the first three companies
itCompanies.reverse(); // Back to the original order
const firstThreeComp = itCompanies.slice(0, 3);
console.log(firstThreeComp);

// Slice out the three last companies
const lastThreeComp = itCompanies.slice(
  itCompanies.length - 3,
  itCompanies.length
);
console.log(lastThreeComp);

// Slice out the middle company
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

// Remove the first company
console.log(itCompanies.shift());

// Remove the last company
console.log(itCompanies.pop());

// Remove the middle company
const middle = itCompanies[Math.floor(itCompanies.length / 2)];
const leftPart = itCompanies.slice(0, middle);
const rightPart = itCompanies.slice(middle, itCompanies.length);
console.log(leftPart.concat(rightPart));

//Remove all companies
itCompanies.length = 0;
console.log(itCompanies)
