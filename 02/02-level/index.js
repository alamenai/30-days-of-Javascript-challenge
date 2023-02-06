const quote =
  "he quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);

const TeresaQuote =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(TeresaQuote);

const isTenTypeEqual = typeof "10" === typeof 10;
console.log(isTenTypeEqual); //false

const isStrictEqual = typeof +"10" === typeof 10;
console.log(isStrictEqual); // true

const parsedEqual = parseFloat("9.8") === 10;
console.log(parsedEqual); // false

const strictParsedEqual = Math.ceil(parseFloat("9.8")) === 10;
console.log(strictParsedEqual); // true

const isOnFound = "python".includes("on") && "jargon".includes("on");
console.log(isOnFound);

const isJargonFound = "I hope this course is not full of jargon".includes(
  "jargon"
);
console.log(isJargonFound);

const hundredRandom = Math.random() * 100;
console.log(hundredRandom);

const halfRandom = Math.random() * 50 + 50;
console.log(halfRandom);

const towHundredRandom = Math.random() * 255;
console.log(towHundredRandom);

const accessJS = "JavaScript".charAt(Math.ceil(Math.random() * 9));
console.log(accessJS);

const escapePattern =
  "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27 4\n1 4 16 64\n5 1 5 25 125";
console.log(escapePattern);

const becauseStr =
  "You cannot end a sentence with because because because is a conjunction'";
const slicedBecause = becauseStr.substring(
  becauseStr.indexOf("because"),
  becauseStr.lastIndexOf("because") + "because".length
);
console.log(slicedBecause);
