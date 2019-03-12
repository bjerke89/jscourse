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
/*
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
/*
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
}; */

//If else

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' is not married!')
}


var isMarried = true;
if (civilStatus) {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' is not married!')
}

//Boolean logic

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy')
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man')
} else {
    console.log(firstName + ' is a min')
}

*/

//ternery operator

var firstName = 'John';
/*
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer') :
    console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
//switch
/*
var job = 'instructor';


switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids');
        break;
    case 'driver':
        console.log(firstName + ' is a driver');
        break;
    case 'designer':
        console.log(firstName + ' designs cars');
        break;
    default:
        console.log(firstName + ' has a no job')
        break;
}

var age = 32;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
        break;
}
*/

//truthy false values

//falsy values: undefined, null, 0 '', NaN.
//truthy values: not falsy
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

//equality operators

if (height === '23') {
    console.log('The == operator does type coercion!');
} else {
    console.log('The === operator does strict type coercion')
} */


//Challenge 2

var teamJohnAvgScore = (89 + 120 + 103) / 3;
var teamMikeAvgScore = (116 + 94 + 123) / 3;
var teamMaryAvgScore = (97 + 134 + 105) / 3;

console.log(teamJohnAvgScore, teamMikeAvgScore, teamMaryAvgScore);



if (teamJohnAvgScore > teamMikeAvgScore && teamJohnAvgScore > teamMaryAvgScore) {
    console.log('John\'s team scored a higher average with ' + teamJohnAvgScore);
} else if (teamMikeAvgScore > teamJohnAvgScore && teamMikeAvgScore > teamMaryAvgScore && teamMikeAvgScore === teamMaryAvgScore) {
    console.log('Mike\'s team scored a higher average with ' + teamMikeAvgScore);
} else if (teamMaryAvgScore > teamJohnAvgScore && teamMikeAvgScore) {
    console.log('Mary\'s team scored a higher average with ' + teamMaryAvgScore);
} else {
    console.log('The scores are equal and it is a tie');
}