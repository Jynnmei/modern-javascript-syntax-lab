// Exercise 1: Applying map()
// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((number) => {
  return `${number}` * 2;
});
console.log(numsTimesTwo);


// Exercise 2: Array destructuring
// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract
//    the first and second values and place them into variables. Name the
//    variable that corresponds to the first value `firstIngredient`. Name the
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here:

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);

// Equivalent in traditional dot notation:
console.log(pizzaToppings[0]);
console.log(pizzaToppings[1]);


// Exercise 3: Destructuring objects
// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
  make: "Audi",
  model: "Q5",
};

// Your code here:

const { make, model } = car;

console.log(make);
console.log(model);

// Equivalent in traditional dot notation:
console.log(car.make);
console.log(car.model);


// Exercise 4: Applying the spread operator on arrays
// ! Exercise 4:
// a. Duplicate the provided `morePizzaToppings` array using the spread
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
//
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ["Cheese", "Sauce"];

// Your code here:

const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log(uncontroversialPizzaToppings);


// Exercise 5: Applying the spread operator on objects
// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
  make: "Toyota",
  model: "RAV4",
};

// Your code here:

const clonedAnotherCar = { ...anotherCar };

clonedAnotherCar.make = "Honda";
clonedAnotherCar.model = "HR-V";

console.log("Original: ", anotherCar);
console.log("Clone: ", clonedAnotherCar);


// Exercise 6: Dynamic keys in objects
// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like
//    'username', 'age', or 'email') to it.
//
// b. Create an object named `userProfile`.
//
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:

const propertyName = "username";

const userProfile = {
  [propertyName]: "Alex",
};

console.log(userProfile);


// Exercise 7: Import and Export
// refer to importingFile.js


// Exercise 8: Default parameters
// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
//
// b. Give `noun` a default value of "cat" and `adjective` a default value of
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but
//    should substitute the appropriate parameters when it is supplied with
//    arguments.
//
// Your code here:

function animal(noun = "cat", adjective = "orange") {
  console.log(`The ${noun} is ${adjective}.`);
}
animal(); 


// Exercise 9: Ternary operator
// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):

const pizza = "tasty";

let access = pizza === "tasty" ? "yum" : "yuck";

console.log(access);


// Exercise 10: Boolean gates
// ! Exercise 10:
// ! 10.1: Set language
// a. Construct a single line of code that assigns a default value using the
//    logical OR operator. This line should match the logic of the following
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// b. Create a variable called `lang`.
//
// c. Assign `lang` the value of localLangConfig or 'en' as a default if
//    `localLangConfig is falsy.
//
// d. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):

// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it `null`.

const lang = localLangConfig || "en";
console.log(lang);


// Exercise 11: Optional chaining
// ! Exercise 11:
// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):

const adventurer = {
  name: "Alice",
};

// Your code here:

let cat = adventurer.cat?.name;

console.log(cat);

