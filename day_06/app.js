//Array() Constructor
//Assigning array as a value

let daysOfAWeek = new Array(
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday');

let numbers = [0,1,2,3,4,5,6,7,8,9];    

let arrayB = new Array(
    'Math',
    'English',
    'Social',
    'Nepali',
    'Economics'
);

let arrayC = [' 34 Portland', '4 Nrc', 'kdwfn'];



const address = '10 Bridge Street, Granville 2142, NSW';
const addressArr = address.split(',');
let streetAddress = addressArr[0];
let suburb = addressArr[1];
let state = addressArr[2];

addressArr[1] = 'Mrlands';

addressArr[3] = 'Australia';

for (let item of addressArr){
    console.log(item);
}

for (let i = 0; i < addressArr.length; i++ ) {
    console.log(addressArr[i]);
}

//delete array elements
//change the length of an array
addressArr.length =3;

delete addressArr[2];

const value0 = numbers.push(10);
console.log(numbers);
const value1 = numbers.pop();
console.log(numbers);

const value2 = numbers.unshift(-1);
console.log(numbers);

const value3 = numbers.shift();
console.log(numbers); 

//splice
const value4 = numbers.splice(5,1);
console.log(numbers); 

//fullName = "Donald Lee Trump"
//Remove the middle name and return Donald Trump as a final result

let fullName = 'Donald Trump Lee';
console.log(fullName);

let fullNameArr = fullName.split(' ');
console.log(fullNameArr);

fullNameArr.splice(1,1);
console.log(fullNameArr);

let updateFullName = fullNameArr.join(' ');
console.log(updateFullName);

let newNumbers = [101, 102, 103, 104, 105];
console.log(newNumbers);
const combinedNumbers = numbers.concat(newNumbers);
console.log(combinedNumbers);

const stringNumbers = combinedNumbers.toString();
console.log(stringNumbers);

const indexOf101 = combinedNumbers.indexOf(101);
console.log(indexOf101);

//Callback function
const total = combinedNumbers.reduce(function (val1, val2){
    return val1 +val2;
}, );

console.log(total);

//map
//Return an array with capitalized first letter and other letters lowercase
let groceryList = ['apple', 'eGg', 'milk', 'ONion', 'GARLIC', 'orange'];
const mappedGroceryList = groceryList.map(function(item){
    let firstLetter = item[0].toUpperCase();
    let restLetter = item.slice(1, item.length).toLowerCase();
    let capitalizedItem = firstLetter + restLetter;
    console.log(capitalizedItem); 
    return capitalizedItem;
});

console.log(mappedGroceryList); 

//filter
let groceryListStartingWithO = mappedGroceryList.filter(function(item){
    if (item[0].toUpperCase() === 'O') {
        return true;
    }
    return false;
});

console.log(groceryListStartingWithO);

//Destructuring Arrays
const [,, newState] = addressArr;
console.log(newState); 

//Spreading Arrays
const letters = ['a', 'e', 'i'];
let newsLetters = ['o', ...letters, 'u'];

let [o, a, ...rest] = newsLetters;

//Store these list in an Array and show them in html pages as ordered list
//Access and modify array elements
//Add or remove elements (using push(), pop(), shift(), unshift())
//Iterate over an array (using for, forEach(), map(), etc)
//Search for elements (using indexOf(), includes(), find())
//Transform arrays (using sort(), filter(), map())

const arrayFunctions =[
    'Access and modify array elements',
    'Add or remove elements (using push(), pop(), shift(), unshift())',
    'Iterate over an array (using for, forEach(), map(), etc)',
    'Search for elements (using indexOf(), includes(), find())',
    'Transform arrays (using sort(), filter(), map())',
];

const arrayFunctionWithli = arrayFunctions.map(function (item) {
    return '<li>' + item + '</li>';
});

const arrayFunctionWithliString = arrayFunctionWithli.join(' ');

const body = document.querySelector('body');
body.innerHTML = '<ol>' + arrayFunctionWithliString + '</ol>';