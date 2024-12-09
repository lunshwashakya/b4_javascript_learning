const pencil = { 
    length: "1.5 inches",
    shape: "hexagonal",
    diameter: "1/4 inch",
    write: function() {
        console.log('This pencil is writing something');
    },
    erase: function() {},
    sharpen: function() {},
};

pencil.length = '2 inches';
pencil.draw = function() {
    console.log('I am drawing something...');
};

const newPencil = {...pencil};

// Creating Objects
// 1. Using object literal
// 2. Using the new keyword (Constructor function)
// 3. Using Object.create()
// 4. Using Class

const student = {
    firstName: "Alex",
    lastName: "Lee",
    email: "alex_lee@gmail.com",
    enroll: function() {
        console.log('Got enrolled in the program');
    },
    changeEmail: function () {
        this.email = 'alex_lee_changed@gmail.com';
    },
};

const student2 = {
    firstName: "Donald",
    lastName: "Trump",
    email: "donald.trump@gmail.com",
    enroll: function() {
        console.log('Got enrolled in the program');
    },
    changeEmail: function () {
        this.email = 'donald_trump_changed@gmail.com';
    },
};

const student3 = Object.create();
student3.firstName = 'Chris';
student.lastName = 'Lee';

const student4 = {};
student4.firstName = 'Jacky';
student4.lastName = 'Lee';

// Constructore function
function Student(firstName, lastName, email) {
    this.firstName = 'Mr/Mrs'  + firstName;
    this.lastName = lastName;
    this.email = email;
}

this.enroll = function () {
    console.log('Got enrolled in the program');
}

this.changeEmail = function() {
    this.email = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}_changed@gmail.com`;
}

const student_a = new Student ('Alex', 'Lee', 'alex_lee@gmail.com');
const student_b = new Student ('Bob', 'Marly', 'alex_lee@gmail.com');
const student_c = new Student ('Charlie', 'Charlie', 'alex_lee@gmail.com');


clas







