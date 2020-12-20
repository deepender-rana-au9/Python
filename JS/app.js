//function to convert the test to upperCase

const upper = (text) => {
  upperText = text.toUpperCase();
  return upperText;
};
text = "abcdefghijklmnopqrstuvwxyz";
console.log(upper(text));
age = 23;
name = "Deepender Rana";
console.log(`Hello my name is ${age + name}`);

//Array
const schedule = ["Wake Up", "Eat", "Study", "Watch videos on Netflix"];
console.log(schedule.push("Sleep"));
//Methods
schedule.pop();
schedule.push("ABC");
schedule.shift();
schedule.unshift("XYZ");

console.log(this);

const obj = {
  abc: "abv",
  1: "123",
  3: function () {
    console.log(Hii);
  },
};

console.log(obj.abc);
