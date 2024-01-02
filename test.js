// ===========================================================
// let's start with a variable that stores numbers and strings
// ===========================================================

let numberOfCats = 2;
numberOfCats += 5;
let numberOfDogs = 1;
numberOfDogs --;

let totalNumberOfPetsText = "Total number of pets is:";
let totalNumberOfPets = numberOfCats + numberOfDogs;


console.log(totalNumberOfPetsText,totalNumberOfPets);

// ================================================================================================
// keeping the practice with variables, but, now we will use another type called *constant = const*
// ================================================================================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

let numberOfsecondsInADayText = "Number of seconds in a day is:"
const secondsInADay = hoursPerDay * minutesPerHour * secondsPerMinute;

console.log(numberOfsecondsInADayText,secondsInADay);
