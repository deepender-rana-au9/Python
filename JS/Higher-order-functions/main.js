const ages = [10, 20, 5, 30, 15, 40, 50, 60, 70, 80];

//Simple for loop

// for (let i = 0; i < ages.length; i++) {
//   console.log(ages[i]);
// }

// forEach

// ages.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// filter

//with simple for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 18) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

//With filter

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);

// map

// const newAge = ages.map(function (item) {
//   return (item += 5);
// });
// console.log(newAge);

// sort

// const sortedAge = ages.sort(function (age1, age2) {
//   if (age1 > age2) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.log(sortedAge);

// reduce

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);
