

// function constructor

/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}*/
/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1968, 'designer');
var mark = new Person('Mark', 1974, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName);
*/

//Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

//Primitives vs. objects

//Primitives
/*
var a = 23;
var b = a;
a = 46;

console.log(a, b);


//Objects 
var obj1 = {
    name: 'John',
    age: 26
};


var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);


//functions

var age = 27;
var obj = {
    name: 'Mark',
    city: 'Oslo'
};

function change(a,b) {
    a = 30;
    b.city = 'Stockholm'
}

change(age, obj);
console.log(age, obj.city);

*/

//Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (let index = 0; index < arr.length; index++) {
        arrRes.push(fn(arr[index]));
    }
    return arrRes;
}

function calculateAge(element) {
    return 2019 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHearRate(element) {

    if (element >= 18 && element <= 81){
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }

    
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHearRate);


console.log(ages);
console.log(rates);
*/

//Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer'){
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');

var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');
*/

//Immediatly invoked function expressions
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/
/*

(
    function () {
        var score = Math.random() * 10;
    console.log(score >= 5);
    }
)();

//console.log(score);

(
    function (goodLuck) {
        var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
    }
)(5);

*/

//Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.'
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1989);
retirementGermany(1989);
retirementIceland(1989);
*/
//retirement(66)(1989);

/*
function interviewQuestion(job) {
    if (job === 'designer'){
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

*/

/*
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


interviewQuestion('designer')('John');
*/

// Bind, call apply methods
/*
var john = {
    name: 'John',
    age: 25,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly'){
            console.log('Hey! Whats\'s up!. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning')

// call allow to change this variable

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
*/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (let index = 0; index < arr.length; index++) {
        arrRes.push(fn(arr[index]));
    }
    return arrRes;
}

function calculateAge(element) {
    return 2016 - element;
}

function isFullAge(limit, element) {
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);








