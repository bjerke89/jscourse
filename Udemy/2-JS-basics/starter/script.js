/*var firstName = 'John';

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);


// define job
var job, isMarried;
job = 'Teacher';
isMarried = false;



//Variable mutation

age = 'twenty eight'

console.log(firstName + ' ' + lastName + ' is ' + age + ' years old' + '. Is he married? ' + isMarried);


alert((firstName + ' ' + lastName + ' is ' + age + ' years old' + '. Is he married? ' + isMarried));

var lastName = prompt('What is his last name?');
console.log(lastName);
*/
//Math Operators
/*
var year, yearJohn, yearmark;
now = 2019;
yearJohn = now - 28;
yearMark = now - 33

ageJohn = 28;
ageMark = 33;


console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//type of operator

console.log(typeof johnOlder);
*/

//Operator precedence

var now = 2019;
var bornJohn = 1989;
var fullAge = 18;

var isFullAge = now - bornJohn >= fullAge;
console.log(isFullAge);
console.log(now - bornJohn);

var ageJohn = now - bornJohn;
var ageMark = 35;

var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments

var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

x *= 2;
console.log(x);
x += 10;

x++;
console.log(x);

//Challenge 1 

var markMass = 85;
var johnMass = 82;
var markHeight = 1.85;
var johnHeight = 1.95;

var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);

console.log('Jonn BMI: ' + johnBmi + ' Mark BMI: ' + markBmi)

if (johnBmi > markBmi) {
    console.log('John\'s BMI is higher with ' + johnBmi)
} else {
    console.log('Mark\'s BMI is higher with ' + markBmi)
};