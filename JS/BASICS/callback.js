x = 10;
function outerFunction() {
  //   var x = 10;
  var innerFunction = function () {
    console.log(x);
  };
  innerFunction();
}
outerFunction();
