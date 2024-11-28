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

addressArr.length =3;
delete addressArr[2];

