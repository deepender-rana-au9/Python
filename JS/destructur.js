let fruit = {
  name: "apple",
  color: "red",
};
// Simple way (ES5)

// console.log(fruit.name);
// console.log(fruit.color);

//Deconstructor way(ES6+)

// let { name, color } = fruit;
// console.log(name);
// console.log(color);

/******************************************************* */

// let user = [
//   {
//     firstName: "Deepender ",
//     lastName: " Rana ",
//   },
//   (user = "abc") => {
//     return "I set the user =", user;
//   },
// ];

// let [userDetail, setUser] = user;
// console.log("before--->", userDetail);

// console.log("after--->", setUser({ firstName: "Chintu", lastName: "Rana" }));

/*------------------------------------------------------------------------*/

let fruits = ["apple", "banana ", "orange"];

let [first, second, third, ...forth] = fruits;
console.log(first);
console.log(second);
console.log(third);
console.log(forth);
