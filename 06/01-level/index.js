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

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let number = 0; number <= 10; number++) {
  console.log(number);
}

// Using while loop
let iterator;
while (iterator < 10) {
  console.log(iterator);
  iterator += 1;
}

// Using do-while loop
let otherIterator;
do {
  console.log(otherIterator);
} while (otherIterator < 10);

// Iterate 0 to n using for loop
const n = 5;
for (let index = 0; index < n; index++) {
  console.log(index);
}

/**Write a loop that makes the following pattern using console.log(): */
/** #
    ##
    ###
    ####
    #####
    ######
    ####### */

for (let index = 0, char = "#"; index <= 7; index++) {
  let vindex = 0;
  let result = "";
  while (vindex <= index) {
    result += char;
    vindex += 1;
  }
  console.log(result);
}

/**
 * Use loop to print the following pattern:
 * 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
 */

for (let vindex = 1, count = 1; vindex <= 10; vindex++) {
  console.log(vindex + " x " + count + " = " + vindex * count);
  count += 1;
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let index = 0; index < 100; index++) {
  const isEven = index % 2 === 0;
  if (isEven) {
    console.log(index);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let index = 0; index < 100; index++) {
  const isOdd = index % 2 != 0;
  if (isOdd) {
    console.log(index);
  }
}

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

const arr = [];
for (let index = 0; index < 5; index++) {
  let num;
  do {
    // Generate another number if the array includes two equal numbers
    num = Math.round(Math.random() * 10);
  } while (arr.includes(num));

  arr.push(num);
}
console.log(arr);
