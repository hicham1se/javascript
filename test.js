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

let accountManager = ["Abraham", 38, false];

// You can then access elements of that array by their index
// (and the indexes start from [0]), means the name "Abraham" is called...
// by [0], his age 38 is called by [1], and if he's married or not is...
// called with [2]. we will call the age with [1].


console.log(lesson4);
console.log(accountManager[1]);
