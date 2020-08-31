/*
time moves quickly for dogs
8 years in a human’s life equates to 45 years in a dog’s life
first two years of a dog’s life count as 10.5 dog years each
Each year following equates to 4 dog years
*/

//My age and name
const myAge = 24;
const myName = 'Taha'.toLowerCase();

//The first two years in the dog's life
let earlyYears = 2;

//to get the human years equals to the first two years of dog's life
earlyYears *= 10.5;

//to take the rest years of human life to calculate them later
let laterYears = myAge - 2;
laterYears *= 4;

// console.log(earlyYears);
// console.log(laterYears);

//calculate my age based on dog years
let myAgeInDogYears = earlyYears + laterYears;

// console.log(myAge);
// console.log(myAgeInDogYears);
