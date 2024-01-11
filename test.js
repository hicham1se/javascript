// ===========================================================
// let's start with a variable that stores numbers and strings
// ===========================================================
let lesson1 = "### Lesson 1 : Variables ###" + "\n" + "***";

let numberOfCats = 2;
numberOfCats += 5;
let numberOfDogs = 1;
numberOfDogs --;

let totalNumberOfPetsText = "Total number of pets is" + ":";
let totalNumberOfPets = numberOfCats + numberOfDogs;


console.log(lesson1);
console.log(totalNumberOfPetsText, totalNumberOfPets);


// ==========================================
// keeping the practice with variables, but...
// Now we will use another type called: constant, *const* in JS
// ============================================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

let numberOfsecondsInADayText = "Number of seconds in a day is:"
const secondsInADay = hoursPerDay * minutesPerHour * secondsPerMinute;


console.log(numberOfsecondsInADayText, secondsInADay);


// ======================================================================
// The type of a variable or constant is the kind of data you store in it. 
// In JavaScript, there are three main primitive types: number, string, boolean
// ============================================================================

// =================================================
// we will start with *typeof*, which can help us...
// show up the type of the variable we are using, string, number, or boolean.
// =========================================================================

let myAgeIs = "My age is:";
let myAgeNumber = 35;
let married = true;
let typesOfVariablesWeHaveText = "The types of variables we used in the exemple 'My age is: 35' are:";


console.log(myAgeIs, myAgeNumber);
console.log(typesOfVariablesWeHaveText);
console.log(typeof myAgeIs, "- for the text (My age is).");
console.log(typeof myAgeNumber, "- for the number (35).");
console.log(typeof married, "- for the text (true).");


// =====================
// Objects in javascript.
// JavaScript objects are written in JavaScript Object Notation (JSON)...
// a series of comma-separated key/value pairs between curly braces...
// which you can store in a variable. To access the object you can call...
// the variable name followed by a dot, and then the key of any of the...
// key/value pairs you have defined, you will get the value of it.
// ==============================================================
let lesson2 = "\n" + "### Lesson 2 : Objects JSON ###" + "\n" + "***";

let account = {
    name: "Abraham",
    age: 35,
    isWorking: true,
};


console.log(lesson2);
console.log(account.name);


// =====================================
// Now more Objects indepth with classes.
// =====================================
let lesson3 = "\n" + "### Lesson 3 : Classes in JS ###" + "\n" + "***";

class Account {
    constructor(name, age, married) {
        this.name = name;
        this.age = age;
        this.married = married;
    }
}


console.log(lesson3);
let myAccount = new Account("Dani", 36, true);
let yourAccount = new Account("Fred", 29, false);
console.log(myAccount.age, "\n", yourAccount);

// =====================================================
// Now let's jump to collections, we'll start with array.
// To create an empty array and store it in a variable...
// you use a pair of square brackets:
// =====================================================
let lesson4 = "\n" + "### Lesson 4 : Collections/Array ###" + "\n" + "***";

let accountManager = ["Abraham", 39, false];

// You can then access elements of that array by their index
// (and the indexes start from [0]), means the name "Abraham" is called...
// by [0], his age 38 is called by [1], and if he's married or not is...
// called with [2]. we will call the age with [1].


console.log(lesson4);
console.log(accountManager[1]);

// =============================================================
// Now we will pass to the diffrence between Value and Reference.
// =============================================================
let lesson5 = "\n" + "### Lesson 5 : Value vs Reference ###" + "\n" + "***" + "\n";

// Premitive types like Strings, Numbers, and Booleans are passed by value.

let nameOf = "Dani";
let age = 39;
let isWorking = true;

// so if you want ot modify the isWorking boolean variable for example.

isWorking = false;

// the result will pass to *false*.

let accounts = [nameOf, age, isWorking];


console.log(lesson5);
console.log(accounts);

// but if you use an object or an array, you cannot pass the modification...
// through value, but through reference.
// let's create an object.

let accountOf = {
    nameOf: "Dani",
    age: 56,
    isWorking: false,
}

// let's change the value of nameOf key

nameOf = "Tau";

console.log(accountOf);

// you can see that the nameOf *Dani* didn't change
// because we passed the change though value, let's do it through reference.

accountOf.nameOf = 'Tau';

console.log(accountOf);

// now you can see what we did here, and it was successful.

// =========================================================
// Arrays in JavaScript are very powerful and have lots of...
// attributes and methods which are extremely useful.
// =================================================

// Here is a brief introduction to a handful of them

let accountUser = ["Abraham", "Dani", "Tau"];

// Counting elements: The *length* property of an array tells you...
// how many elements there are in it:
let accountNumber = accountUser.length;

console.log(accountNumber);

// Adding and removing elements: To add an element to the end of an...
// array, use its  *push* method:

accountUser.push("Fred");

console.log(accountUser);

// If you want to add your element at the beginning of the...
// array instead of the end, use the  *unshift*  method:

accountUser.unshift("lisa");

console.log(accountUser);

// To remove the last element of an array, call its *pop* method...
// without passing any arguments:

accountUser.pop();

console.log(accountUser);

// there you go! we removed *Fred* for you.


// ************************************
// ===============================
// now we'll talk about *functions*
// ===============================

let lesson6 = "\n" + "***************" + "\n" 
+ "### Lesson 5 : Functions ###" + "\n" + "***" + "\n";

console.log(lesson6);

// we will start with the *if/else statement*

let validAccount = true;

if (validAccount) {
    console.log("Welcome back!");
} else {
    console.log("Incorrect user-email or password");
}

// if the user entered the correct email and password, 

