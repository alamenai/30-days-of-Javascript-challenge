// Create an empty object called dog
const dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Jack";
dog.legs = 4;
dog.age = 2;
dog.bark = () => "woof woof";
// Get name, legs, color, age and bark value from the dog object
const { name, legs, age, bark } = dog;

// Set new properties the dog object: breed, getDogInfo
dog.breed = "";
dog.getDogInfo = () => console.log(dog);
