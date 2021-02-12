let x = "John";
let y = "Doe";
//console.log(x + " " + "<>" + " " + y);
const user = {
  name: "Giulio",
  surname: "Perullo",
  email: "giulioperullo2015@gmail.com",
};
delete user.email;
const MyArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//console.log(MyArray);
const RNum = [];
for (let i = 0; i < 100; i++) {
  RN = Math.floor(Math.random() * 100 + 1);
  RNum.push(RN);
}
//console.log(RNum);
const minmax = function () {
  min = Math.min.apply(Math, RNum);
  max = Math.max.apply(Math, RNum);
  console.log(min, max);
};
//console.log(minmax());
const randomNum = function () {
  for (let i = 0; i < 10; i++) {
    let res = Math.floor(Math.random() * 100 + 1);
  }
};
const ArrayOfArrays = [[], [], [], [], []];
ArrayOfArrays.forEach((array) => {
  for (let i = 0; i < 10; i++) {
    why = Math.floor(Math.random() * 10 + 1);
    array.push(why);
  }
});
//console.log(ArrayOfArrays);
const longest = function () {
  let first = [Math.floor(Math.random(0 - 1) * 5)];
  let second = [Math.floor(Math.random(0 - 1) * 5)];
  firstA = ArrayOfArrays[first];
  secondA = ArrayOfArrays[second];
  if (firstA.lenght > secondA.lenght) {
    console.log(firstA);
  } else if (firstA.lenght < secondA.lenght) console.log(secondA);
  else console.log(firstA, secondA);
};
//console.log(longest());

const higher = function () {
  let firstB = [Math.floor(Math.random(0 - 1) * 5)];
  let secondB = [Math.floor(Math.random(0 - 1) * 5)];
  firstC = ArrayOfArrays[firstB];
  secondC = ArrayOfArrays[secondB];
  console.log(firstC);
  console.log(secondC);
  let tot1 = firstC.reduce(function (a, b) {
    return a + b;
  }, 0);
  let tot2 = secondC.reduce(function (a, b) {
    return a + b;
  }, 0);
  tot1 > tot2 ? console.log(tot1) : console.log(tot2);
};
console.log(higher());
