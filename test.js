// ===========================================================
// let's start with a variable that stores numbers and strings
// ===========================================================

let numberOfCats = 2;
numberOfCats += 5;
let numberOfDogs = 1;
numberOfDogs --;

let totalNumberOfPetsText = "Total number of pets is:";
let totalNumberOfPets = numberOfCats + numberOfDogs;


console.log(totalNumberOfPetsText, totalNumberOfPets);

// ===========================================
// keeping the practice with variables, but...
// Now we will use another type called: constant, *const* in JS
// ============================================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

let numberOfsecondsInADayText = "Number of seconds in a day is:"
const secondsInADay = hoursPerDay * minutesPerHour * secondsPerMinute;


console.log(numberOfsecondsInADayText, secondsInADay);


// =======================================================================
// The type of a variable or constant is the kind of data you store in it. 
// In JavaScript, there are three main primitive types: number, string, boolean
// ============================================================================

// =================================================
// we will start with *typeof*, which can help us...
// show up the type of the variable we are using.
// ==============================================

let myAgeIs = "My age is:";
let myAgeNumber = 35;
let typesOfVariablesWeHaveText = "the types of variables we used in this exemple are:";


console.log(myAgeIs, myAgeNumber);
console.log(typesOfVariablesWeHaveText);
console.log(typeof myAgeIs, "- for the text (My age is).");
console.log(typeof myAgeNumber, "- for the number (35).");
