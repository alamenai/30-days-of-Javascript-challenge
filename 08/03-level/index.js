// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Ala Eddine",
  lastName: "Menai",
  incomes: [],
  expences: [],
  totoalIcome: () => {},
  totoalExpenses: () => {},
  accountInfo: () => {},
  accountIncome: () => {},
  addExpense: () => {},
  accountBalance: () => {},
};

const usersList = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signup(user) {
  if (usersList.includes(user)) {
    console.log("You have already an account");
    return true;
  } else {
    usersList.push(user);
    return false;
  }
}

function signin(user) {
  if (usersList.includes(user) && !user.isLoggedIn) {
    user.isLoggedIn = true;
  }
  return user.isLoggedIn;
}

/**
 * The products array has three elements and each of them has six properties.
 a. Create a function called rateProduct which rates the produc
 b. Create a function called averageRating which calculate the average rating of a product
 **/

function rateProduct(productId, user, rate) {
  const product = products.find((product) => (product._id = productId));
  product.ratings.push({ userId: user._id, rate: rate });
  return [...products, product];
}

/**
 * Create a function called likeProduct.
 * This function will helps to like to the product if it is not liked and remove like if it was liked.
 */

function likeProduct(productId, user) {
  const productLikes = products.find(
    (product) => (product._id = productId)
  ).likes;

  !productLikes.includes(user)
    ? productLikes.push(user)
    : productLikes.splice(productLikes.indexOf(user._id), 1);
    return productLikes
}
