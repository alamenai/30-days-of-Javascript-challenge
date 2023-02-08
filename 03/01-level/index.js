const firstName = "Ala Eddine";
const country = "Algeria";
const city = "Batna";
const age = 29;
const isMarried = false;
const year = new Date().getFullYear();

// Check their data types
console.log(typeof firstName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check the equivalent of types
console.log(typeof "10" === typeof 10);
console.log(typeof parseInt("9.8") === 10);

// Three statement provides truthy values
console.log(typeof "Hello" === typeof "World");
console.log(10 === 10);
console.log(true === true);

// Three statements provides falsy values

console.log(false === true);
console.log(typeof "Hello" === typeof 10);
console.log(NaN === NaN);

// Compare the length of strings
console.log("python".length === "jargon".length);

// Year of the today
console.log(new Date().getFullYear());

// Month of the today
console.log(new Date().getMonth() + 1);

// Date of the today
console.log(new Date().getDate());

// Day of the today
console.log(new Date().getDay());

//  Hours
console.log(new Date().getHours());

// Minutes
console.log(new Date().getMinutes());

// Seconds
console.log(new Date().getSeconds());

// Numbers of seconds elapsed from January,1 1970
console.log(Date.now() - new Date(1970,1,1).getSeconds());
