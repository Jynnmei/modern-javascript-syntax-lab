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


