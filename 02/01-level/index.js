const challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);

const upperCase = challenge.toUpperCase();
console.log(upperCase);

const lowerCase = challenge.toLowerCase();
console.log(lowerCase);

const firstLetter = challenge.substring(0, 1);
console.log(firstLetter);

const sliced = challenge.slice(2, challenge.length);
console.log(sliced);

const hasScriptWord = challenge.includes("Script");
console.log(hasScriptWord);

const toArray = challenge.split(" ");
console.log(toArray);

const FANG_ARR =
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",");
console.log(FANG_ARR);

const replacedWithPython = challenge.replace("JavaScript", "Python");
console.log(replacedWithPython);

const charAt = challenge.charAt(15);
console.log(charAt);

const charCodeAt = challenge.charCodeAt(challenge.indexOf("J"));
console.log(charCodeAt);

const indexOf = challenge.indexOf("a");
console.log(indexOf);

const lastIndexOf = challenge.lastIndexOf("a");
console.log(lastIndexOf);

const indexOfWord =
  "You cannot end a sentence with because because because is a conjunction'".indexOf(
    "because"
  );
console.log(indexOfWord);

const lastIndexOfWord =
  "You cannot end a sentence with because because because is a conjunction'".lastIndexOf(
    "because"
  );
console.log(lastIndexOfWord);

const searchFirstOccurance =
  "You cannot end a sentence with because because because is a conjunction'".search(
    "because"
  );
console.log(searchFirstOccurance);

const trimedStr = "  30 Days of JavaScript   ".trim();
console.log(trimedStr);

const startedWith = "Welcome to Algeria".startsWith("Welcome");
console.log(startedWith);

const endedWith = "Algeria is wonderful".endsWith("wonderful");
console.log(endedWith);

const matchedLetter = challenge.match(/a/g);
console.log(matchedLetter);

const mergedStr = "30 Days of".concat("Javascript");
console.log(mergedStr);

const twiceRepeated = challenge.repeat(2);
console.log(twiceRepeated);
