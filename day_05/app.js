//if..else statement
//if
//if..else
//if..else if ...else statement

let city = 'Melbourne';
let message;

if (city == 'Sydney'   || city == 'Brisbane') {
    message = "Welcome to Sydney!";
} 
else if (city == 'Perth') {
    message = "You are from Perth!";
}
else if (city == 'Melbourne') {
    message = "You are from Melbourne!";
}
else {
    message = "You don't seem to be from Sydney or Brisbane";
}


//let mobile = '0465898765';
//if (mobile == 0465898765){
//    console.log('Your mobile matches with us!');
//}
//else {
//    console.log('YOur mobile does not match!');
//}

// (condition) ? statement_when_condition_is_true: statement_when_condition_is_false
 //mobile === '0465898765'
   // ? console.log('Your mobile matches with us!')
    //: console.log('YOur mobile does not match!');

let day = new Date();
const hour = day.getHours();
//if (hour < 12){
//    greetings ='Good Morning!';
//} else{
//    greetings = 'Good Afternoon!';
//}

//const greetings = hour < 12 ? 'Good Morning': 'Good Afternoon';

//Short circuit
// && , ||
let greetings = hour < 12 && 'Good Morning';
greetings = hour < 12 || 'Good Afternoon';

const month = day.getMonth();
let monthName; 
switch(month +1) {
    case 1:
        monthName = 'January';
        break;
    case 2:
        monthName = 'Feburary';
        break;
    case 11:
        monthName = 'November';
        break;
    default:
        monthName = "Looks like the month is not valid!";
}

const element  = document.getElementById('message');
element.innerHTML = monthName;

//Loops
//for loop
//while loop
//do while loop
//for in loop
//for of loop   

//for loop

//for(let i = 100; i > 0; i--) {
//    console.log(i);
//}

for (let j =2; j<= 9; j++){
    for (let i = 1; i <= 10; i++) {
        console.log(`${j} * ${i} = ${j*i}`);
    }
}
    
//for... in
//loop through the object
const student = {
    firstName: 'Alex',
    lastName: "Lee",
    email:  "alex_lee@gmail.com",
    address: '10 Bridge Street, Granville',
};

for (let key in student) {
    console.log(`${key} value is: ${student[key]}`);
}

//for...of
//loop through an array
let fruits = ['apple', 'banana', 'Guava', 'Mango', 'Coconut'];
for(let [index, item] of fruits.entries()) {
    console.log(`${index}: ${item}`);
}

//do...while
let i = 1;
do {
    console.log(i);
    i++;
} while(i <= 10);

//while loop
let j =1;
while (j<= 10) {
    console.log({j});
    j++;
}

for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log({i})
}

let phoneNumber = '555-747-2322';
for (let digit of phoneNumber) {
    if (digit === '-') continue;
    console.log(digit)
}