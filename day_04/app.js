let fullName = 'Alex lee';
fullName = 'Donald Lee';

const surName = 'Lee';

var firstName = "Alex";


let firstNum = 101;
let secondNum = 102;
let sum = firstNum + secondNum;

//let num1 = prompt('Enter first number: ');
//let num2 = prompt('Enter second number: ');
//alert(`Sum of ${num1} and ${num2} is: ${parseInt(num1) + parseInt(num2)}`);

const famousQuote = "\"You can only live once!\"";

const bio = "Hi my name is Alex Lee! \n I am currently studying full-stack.";

let nameLength = fullName.length;
console.log(fullName.charAt(fullName.length - 1));

console.log(firstName.concat(' ', surName));
console.log(fullName.indexOf('a'));
console.log(fullName.lastIndexOf(''));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split(' '));
console.log(fullName.substring(0, fullName.indexOf(' ')), fullName.length);

const fullNameWithMiddleName = 'Alex Li Chen';

console.log(fullNameWithMiddleName.substring(0, fullNameWithMiddleName.indexOf(' ')));
console.log(fullNameWithMiddleName.substring(fullNameWithMiddleName.indexOf(' '), fullNameWithMiddleName.lastIndexOf(' ')));
console.log(fullNameWithMiddleName.substring(fullNameWithMiddleName.lastIndexOf(' '), fullNameWithMiddleName.length));


let message = "Welcome to Javascript Class";
console.log(message);
console.log(message.replace('Javascript', 'Programming'));

const salary = 100000;
const dob = 2020;
const weight = 50.5;
const height = 165.5;

//number functions
//parseInt
//parseFloat

let tip = '20.50';
let tipPerStaff = parseFloat(tip / 5);
console.log('tipPerStaff', tipPerStaff, tipPerStaff.toString());    
console.log('tipPerStaff', typeof tipPerStaff,typeof tipPerStaff.toString());    


let veryBigNumber = 58698789797878958686786868978n;
let veryBigInt = 58698789797878958686786868978;
console.log(veryBigNumber, veryBigInt);

//Boolean
let isMarried = true;
let isStudent = false;

console.log(3 > 20);
console.log("Alex" == "alex");
console.log(0 !== '0');

console.log(!!'Nabin');
console.log(!!0);
console.log(!!'0');
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!100);


console.log(!!parseInt(fullName));

//NaN
console.log(Math.sqrt(-1));
console.log('0434078965' * 61);
console.log('cats' * 61);


//undefined
let pet;
console.log(pet);

//null
let student ={};
console.log(student);

student = null;
console.log(student);

//Symbol data type

let symbol1 = Symbol('Skillup Labs');
let symbol2 = Symbol('Skillup Labs');
console.log(symbol1, typeof symbol2);
console.log(symbol1 === typeof symbol2);

//Objects
let subject = {
    name: "intro to js",
    into: "Small intro to js",
    price: 1000,
    instructor: "Alex Leee"
}

console.log(subject, typeof subject);

subject.name = 'Intro to programming';

console.log(subject.into);

//Array
const fruits = ['Apple', 'Banana', 'Gava', 'Mango'];
console.log(fruits, typeof fruits, fruits[0], fruits[fruits.length-1]);

fruits[0] = 'Taro';

console.log(fruits);

//Scope
//Global
//Module Scope
//Function Scope
//Block Scope


//arthmetic operations
//+_*?%
let a = 101;
let b = 202;
let c = a + b;
let d = b - a;
let e = a * b;
let f = b / a;
let g = c / d;
let h = b % a;
let i = a + (b - (c * d) / (c % e));
let j = i++;
let k = i--;
let m = --i;
console.log(
    {
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
    }
);

//Unary operators
// ++, --

//Short cricuit 
