//Q1
let sto = false;

while (!sto) {
  var age = Number(prompt("Enter your Age"));
  if (age === null) {
    break;
  } else if (isNaN(age)) {
    alert("Please enter a valid number.");
  } else if (age < 0) {
    alert("Please enter a positive number.");
  } else {
    getAge(age);
  }
  function getAge(age) {
    if (age >= 1 && age <= 10) {
      alert("Child");
    } else if (age >= 11 && age <= 18) {
      alert("Teenager");
    } else if (age >= 19 && age <= 50) {
      alert("Grown up");
    } else {
      alert("Old");
    }
  }
  var msg = prompt("do you want exit ? (if you want type  yes)");
  if (msg === "yes") {
    sto = true;
  }
}

//Q2
var str = prompt("Enter String");

var count = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "i" ||
    str[i] === "e" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    count++;
  }
}
var result = count;
alert(result);

//Q3
var msg = prompt("Enter 24 hours format ");
time = msg >= 12 ? "pm" : "am";
hours = msg % 12;
var finalTime = hours + " " + time;
alert(finalTime);
