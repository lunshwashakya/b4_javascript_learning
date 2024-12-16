// defining a function
function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}

function greeting() {
    console.log('Hello!');
}

function getPiValue(){
    return 3.14;
}

// calling a function
const a = 5;
const b = 6;
console.log(sum(a,b));

function sum(num1,num2){
    const result = num1 + num2;
    return result;
}

greeting();

const pi = getPiValue();
console.log(pi);

// document.getElementById();
// Write a function that takes number as the argument and prints multiplication table
// Call that  function to print multiplication of 5, 28, 985, 6547854

function multiplication(number1){
    for (let i=1; i<=10; i++){
        const table = number1 *i;
        console.log(`${number1}* ${i} = ${table}`);
    }
}

// multiplication(5);
// multiplication(28);
// multiplication(985);
// multiplication(6547854);

// Passing arguments
// Pass by value()

function greetingInEnglish(name){
    name = 'Donald';
    return `Hello ${name}!`;
}

let name = "Alex";
console.log(greetingInEnglish(name));
console.log(name);

function printNumOfDays(days){
    days.push('Wednesday');
    for (const day of days){
        console.log(day);
    }
}

const days = ['Sunday', 'Monday', 'Tuesday'];
printNumOfDays(days);
printNumOfDays([...days]);
console.log(days);

// Anonymous function

// callback function - if you pass function as an argument it is called callback function
function doSomething(callback) {
    callback();
}

doSomething(function(){
console.log("It's done!");
});

// 

function doFirstThing(callback){
    console.log('This is doing first thing!');
    callback();
}

function secondThing() {
    console.log('This is doing second thing!');
}

doFirstThing(secondThing);

//Conditionally defining a function using an expression / function expression
let water = false;
function getThere(distance) {
    let estimateTripDuration = 0;
    if(water === true) {
        const getSwimTime = () => {
            return distance / 2;
        };
        estimateTripDuration = getSwimTime();
    }
    else{
        const getWalkTime = () =>{
            return distance / 4;
        };
        estimateTripDuration = getWalkTime();
    }
    return estimateTripDuration;
}

const distance = 10;
console.log(`It will take ${getThere(distance)} hours to get there`);

// Arrow function
const doubleArra =[1,2,3,4].map((item) => item * 2);
console.log(doubleArra);