// Use the countries information, in the data folder. Sort countries by name, by capital, by population

const countriesList = require("../countries.js");

const sortByName = () => countriesList.sort();
console.log(sortByName());

const sortByCapital = () =>
  countriesList.sort((prev, next) => prev.capital < next.capital);
console.log(sortByCapital());

const sortByPopulation = () =>
  countriesList.sort((prev, next) => prev.population < next.population);
console.log(sortByPopulation());

// Find the 10 most spoken languages:
const mostSpokenLanguage = (countries, limit) =>
  countries
    .map((country) => country.languages)
    .flat()
    .reduce((acc, language) => {
      return (
        acc[language] ? ++acc[language] : (acc[language] = 1),
      acc
      );
    }, []);

console.log(mostSpokenLanguage(countriesList, 10));
