// Write a script that prompt the user to enter base and height of the triangle
// Calculate an area of a triangle (area = 0.5 x b x h).

const base = prompt("Enter base:");
const height = prompt("Enter height:");

const area = 0.5 * base * height;

alert("The are of the triangle is:" + area);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle
// Calculate the perimeter of triangle (perimeter = a + b + c)

const side_a = prompt("Enter side a:");
const side_b = prompt("Enter side b:");
const side_c = prompt("Enter side b:");

alert("The perimeter of the triangle is:" + side_a + side_b + side_c);

// Get length and width using prompt and calculate an area of rectangle (area = length x width
// And the perimeter of rectangle (perimeter = 2 x (length + width))

const Rectwidth = prompt("Enter the width:");
const Rectheight = prompt("Enter the height:");

alert("The area of the rectangle is:" + Rectwidth * Rectheight);
alert("The perimeter of the rectangle is:" + (Rectheight + Rectwidth) * 2);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r)
// And circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const PI = 3.14;
const radius = prompt("Enter the radius:" + radius);
const c_area = PI * Math.pow(radius, 2);
const circumference = 2 * PI * radius;
alert("The are of the circle is:" + c_area);
alert("The circumference of the circle is:" + circumference);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

const y1 = 2 * 0 - 2; // x=0
const y2 = 2 * 1 - 2; // x=1
const x1 = 2 / 2; // y=0
const x2 = -2 / 2; // y==1

const slot = (y2 - y1) / (x2 - x1);

console.log(slot);

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

const workHours = prompt("Enter the hours:");
const ratePerHour = prompt("Enter the rate:");
const pay = workHours * ratePerHour;
console.log(pay);

//If the length of your name is greater than 7 say, your name is long else say your name is short.

const myName = "Ala Eddine";

if (myName.length > 7) {
  console.log("My name is too long");
} else {
  console.log("My name is too short");
}

const firstName = "Ala Eddine";
const lastName = "Menai";

if (firstName.length > lastName.length) {
  console.log(
    `My first name ${firstName} is longer than my family name,${lastName}`
  );
} else {
  console.log(
    `My last name ${lastName} is longer than my first name,${firstName}`
  );
}

const myAge = 29;
const yourAge = 250;

console.log(`I'm ${yourAge - myAge} years older than you.`);
