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

// we will start with the *if/else statement* which are like boolean premitive
// data type:

let validAccount = true;

if (validAccount) {
    console.log("Welcome back!");
} else {
    console.log("Incorrect user-email or password");
}

// *if* the user entered the correct email and password
//the  console will pass a welcoming message to the user "Welcome back!"
// if he enters something *else* than the correct email and password,
// he will be prompted with an error message "Incorrect user-email or password".
// in this case as we decalred a variable "validAccound" with the value "true", so
// the it is the right user "Welcome back!"

// we will use more if/else statement, but this time with comparative expressions:

let userPurchase = 2;
const userGiftThreshold = 3;
let jackpot = 10;

if (userPurchase == jackpot) {
    console.log("YOU WON! 500$ gift card! USE IT RIGHT NOW!");
} else if (userPurchase > userGiftThreshold) {
    console.log("You won a gift for free on any product under 300$, GET IT NOW!");
} else { 
    console.log("Buy three and take a gift for free, SHOP NOW!");
}

// in this example, we daclared the "userPurshase" variable that its
// value is "2" product. then another constant variable *const* "userGiftThreshold"
// that defines how many products you have to purchases in order to win a gift.
// in this example "3" products. so, *if* the amount of product you have bought
// is greater *>* than "3" you get the message "You won a gift for free on any
// product under 300$, GET IT NOW!", but in this case the "userPurchase are less
// than "3", so, the message is "Buy three and take a gift for free, SHOP NOW!".

// change "userPurchase" from the vakue "3" to the value "10" and see how the first
// condition will pass!


// in this example, we used third form possible of the if/else statement
// which is *else if* statement. but this one it more like anther *if* somehow,
// for you have to give it a condition in order to work. so, we switched the
// variables as if "userGiftThreshold" is greater than "userPurchase", than
// the user purchased less than the required "3" items, which is true in this case
// as the user bought just "2" items.100

// and now we will pass to logical operators, AND, OR, NOT. those are
// the most used logical operators in programming, let see how we can use them
// inside a if/else statement.

// let's say we have an app, in which we have multiple user accounts grades
// (free-user, premium-user, and vip-users). We want to check whether the user
// who is logging in is free, premium, or vip user. so we can do it like so:

let userHaveAnAccount = false;
let userHaveAPremiumAccount = true;
let userHaveAVipAccount = false;

// you can play with "true" or "false" values to pass diffrent outputs

if (userHaveAnAccount && userHaveAVipAccount) {
    console.log("Welcome back! enjoy the latest Tom Cruise's movie 'Mission Impossible' with your vip subscription!");
} else if (userHaveAnAccount && userHaveAPremiumAccount) {
    console.log("welcome back to your account! enjoy the new episode 'The Binge' with your premium subscription!.");
} else if (userHaveAnAccount) {
    console.log("Welcome back! have a look on the latest series and movies we added")
} else {
    console.log("Please! connect to your account or, if you're new, choose to create one.")
}

// OK! let's explain...
// if you have a "vip account" you will get access to all contents in the plateform.
// if you have a "premium account" you will get access to to some content and you
// still have to pay for others that still in cinema premiere.
// if you have just a "free user account" you will get some content that are older
// than 3 years.
// in this case we have a "premium account" but we have to connect to our normal
// account in order for the system to recognise our premium subscription.
// TRY TO CHANGE "userHaveAnAccount" to "true" and see the result.

 