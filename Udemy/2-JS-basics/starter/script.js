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

//var firstName = 'John';
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
/*
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

*/

// Functions

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0 ) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName +  ' is already retired');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

// function statements expressions

//func declaration
//function whatDoYouDo(job, firstName) {}

/*func expression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
    
        case 'driver':
            return firstName + ' drives uber';

        case 'designer':
            return firstName + ' designs clothes';
        
        default:
            return firstName + ' does not have a valid job';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Mark'));
console.log(whatDoYouDo('designer', 'Jane'));
*/

//Arrays
/*
var names = ['John', 'Mike', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names);

//diff types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');

console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1923));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);

*/

//Challenge
/*
var tipArrayay = new Array;
var billArray = [124,48,268];

function calculcateTip(bill) {
    
    if (bill < 50) {
        tipPercentage = .20;

    } else if(bill > 50 && bill < 200) {
        tipPercentage = .15;
    } else {
        tipPercentage = .1;
    }
        return tipPercentage * bill
}


    function tipCalc(bill) {
        switch (true) {
            case (bill < 50):
                return (bill * 20) / 100

            case (bill> 50 && bill < 200):
                return (bill * 15) / 100;
            
            case (bill > 200):
                return (bill * 10) / 100;
            
            default:
                break;
        }
        console.log(tipArrayay)
    }


    billArray.forEach(element => {
        var tip = calculcateTip(element);
        tipArrayay.push(tip)
    });

console.log(tipArrayay);


var billArray = [124,48,268];
var tipArrayay  = [calculcateTip(billArray[0]),
                 calculcateTip(billArray[1]),
                 calculcateTip(billArray[2])]

var totalArrayay = [billArray[0] + calculcateTip(billArray[0]),
                  billArray[1] + calculcateTip(billArray[1]),
                  billArray[2] + calculcateTip(billArray[2])]

console.log(tipArrayay)
//console.log(totalArrayay)
*/

//Objects and properties

//Object literal
/*
var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher', 
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

//New Object
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Doe';

console.log(jane)
*/
//Objects and methods

/*
var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher', 
    isMarried: false,
    calcAge: function () {
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

//Challenge 4
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 78,
    height: 1.80,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var mark = {
    firstName:'Mark',
    lastName: 'Johnson',
    mass: 78,
    height: 1.80,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

console.log(john,mark);

if (john.calcBMI() > mark.calcBMI()) {
    console.log('John has the highest BMI with ' + john.BMI)
} else if(mark.BMI > john.BMI) {
    console.log('Mark has the highest BMi with ' + mark.BMI)
} else {
    console.log('The BMI are the same. BMI John: ' + john.BMI + ' BMI Mark: ' + mark.BMI)
}

*/

//Loops
/*
for (let index = 0; index < 10; index++) {
    console.log(index)    
}
for (let index = 1; index <= 10; index += 2) {
    console.log(index)    
}
*/
/*
var john = ['John', 'Smith', 1990, 'designer', false];

// for loop
for (let index = 0; index < john.length; index++) {
    console.log(john[index]);   
}

//while loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/
//continue break

/*
var john = ['John', 'Smith', 1990, 'designer', false];
/*
for (let index = 0; index < john.length; index++) {
    if (typeof john[index] !== 'string') continue;
    console.log(john[index]);   
}

for (let index = 0; index < john.length; index++) {
    if (typeof john[index] !== 'string') break;
    console.log(john[index]);   
}
*/

//Loop reverse
/*
for (let index = john.length - 1; index >= 0; index--) {
    console.log(john[index]);   
}
*/

//Challenge 5

var billsJohn = {
    billsJohnArray: [124, 48, 268, 180, 42],
    tipArray: new Array,
    totalArray: new Array,
    calcTip: function() {
        for (let index = 0; index < this.billsJohnArray.length; index++) {
            if (this.billsJohnArray[index] < 50) {
                this.tip = (this.billsJohnArray[index] * 20) / 100;
                this.tipArray.push(this.tip);
                this.totalArray.push(this.billsJohnArray[index] + this.tip);
            } else if (this.billsJohnArray[index] > 50 && this.billsJohnArray[index] < 200) {
                this.tip = (this.billsJohnArray[index] * 15) / 100;
                this.tipArray.push(this.tip);
                this.totalArray.push(this.billsJohnArray[index] + this.tip);
            } else {
                this.tip = (this.billsJohnArray[index] * 10) / 100;
                this.tipArray.push(this.tip);
                this.totalArray.push(this.billsJohnArray[index] + this.tip);
            }
        }
    }
}

billsJohn.calcTip();

console.log(billsJohn.tipArray, billsJohn.totalArray)

var billsMark = {
    billsMarkArray: [77, 475, 110, 45],
    tipArray: new Array,
    totalArray: new Array,
    calcTip: function() {
        for (let index = 0; index < this.billsMarkArray.length; index++) {
            if (this.billsMarkArray[index] < 100) {
                this.tip = (this.billsMarkArray[index] * 20) / 100;
                this.tipArray.push(this.tip);
                this.totalArray.push(this.billsMarkArray[index] + this.tip);
            } else if (this.billsMarkArray[index] > 100 && this.billsMarkArray[index] < 300) {
                this.tip = (this.billsMarkArray[index] * 10) / 100;
                this.tipArray.push(this.tip);
                this.totalArray.push(this.billsMarkArray[index] + this.tip);
            } else {
                this.tip = (this.billsMarkArray[index] * 25) / 100;
                this.tipArray.push(this.tip);
                this.totalArray.push(this.billsMarkArray[index] + this.tip);
            }
        }
    }
}

billsMark.calcTip();

console.log(billsMark.tipArray, billsMark.totalArray)

var averageTips = function(tips) {
    var sum = 0;
    for (let index = 0; index <tips.length; index++) {
        sum = sum + tips[index]
    }
    return sum / tips.length;
}

johnAverage = averageTips(billsJohn.tipArray);
markAverage = averageTips(billsMark.tipArray);

console.log(johnAverage, markAverage);

if (johnAverage > markAverage) {
    console.log('John\'s family pays higher tips with an average of ' + johnAverage);
} else if(markAverage > johnAverage) {
    console.log('Mark\'s family pays higher tips with an average of ' + markAverage)
} else {
    console.log('Both family pays the same amount of tips on average');
}






