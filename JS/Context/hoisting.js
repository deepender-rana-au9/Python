tipper(5);
//hoisted
function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
//not hoisted
var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};
//function declaration are scanned and made available
//variable declaration are scanned and made undefined

name = "deepender";
console.log(name);
sayName();
function sayName() {
  var name = "mr. h";
  console.log(name);
}

console.log(name);
