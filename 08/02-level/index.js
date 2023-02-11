const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.

let skilledUser = { name: undefined, skillsCount: 0 };
for (const [name, { skills }] of Object.entries(users)) {
  if (skills.length > skilledUser.skillsCount) {
    skilledUser.name = name;
    skilledUser.skillsCount = skills.length;
  }
}

console.log(skilledUser);

// Count logged in users, count users having greater than equal to 50 points from the following object.
let count = 0;
for (const [name, { points }] of Object.entries(users)) {
  if (points >= 50) {
    count += 1;
  }
}

console.log(count);

let mernDevs = [];
for (const [name, { skills }] of Object.entries(users)) {
  const isMernDev =
    skills.includes("React") &&
    skills.includes("Node") &&
    skills.includes("Express") &&
    skills.includes("MongoDB");

  if (isMernDev) {
    mernDevs.push({ name: name });
  }
}

console.log(mernDevs);

// Set your name in the users object without modifying the original users object
const withMyName = Object.assign({}, users, { name: "Ala Eddine" });
console.log(withMyName);

// Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys);

// Get all the values of users object
const values = Object.values(users);
console.log(values)
