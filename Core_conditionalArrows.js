
// 1. Write an arrow function that checks to see if a user is older than 18.
const isAdult = (age) => age>=18
    ? "You are good to go!" 
    : "Sorry! You must be 18 or older!";
console.log(isAdult(17));

// 2. Write an arrow function that checks to see if it is currently raining.
const isRain = (rain) => rain
    ? "Get your rain jacket!" 
    : "No rain on today's forecast!";
console.log(isRain(true));

// 3. Write an arrow function that checks to see if a number is even.
const checkEvenNumber = (number) => number % 2 == 0
    ? "That's an even number!"
    : "That's an odd number!"; 
console.log(checkEvenNumber(21));

// 4. Write an arrow function that takes in two parameters and checks whether one number is greater than another.
const chechBigNumber = (num1, num2) => num1 > num2
    ? `${num1} is more than ${num2}!` 
    : `${num1} is less than ${num2}!`
console.log(chechBigNumber(111,22));
