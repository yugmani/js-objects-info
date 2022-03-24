// Import stylesheets
import './style.css';

// Creating an empty object
// ***********************

// object constructor syntax uses new keyword
let user = new Object();
console.log(user); //{}

// OR

// "object literal" syntax
let people = {};
console.log(people); //{}

//an object with two properties name and age
people = {
  name: 'Leon', // key is name and value is Leon
  age: 27, // key is age and value is 27;
};

//Adding more properties in the existing object

// using dot notation
people.isAdmin = true;

// using square bracket notation
people['likes pizza'] = true; // multiword property name must be quoted and used only with square bracket notation

console.log(people);
/*
{
  name: "Leon", 
  age: 27, 
  isAdmin: true, 
  "likes pizza": true
} 
*/

//Getting property values of an object
console.log(people.name); //Leon
console.log(people.age); //27
// console.log(people.likes pizza);  //undefined ?? multiword?
console.log(people['likes pizza']); //true

//Remove a property
let deleted = delete people.age;
console.log(deleted); // true;  ??
console.log(delete people['likes pizza']); //true

//COMPUTED properties

//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// let fruit = prompt("Which fruit do you like?", "apple");
let fruit = 'Yellow Berry';
let myBag = {
  [fruit]: 5,
};

console.log(myBag[fruit]); //5
console.log(Object.keys(myBag)); //["Yellow Berry"]

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
const capitals = function (word) {
  // Write your code here
  let regex = /[A-Z]/g;
  let caps = word
    .split('')
    .filter((letter) => {
      if (/^[A-Z]*$/.test(letter)) {
        return letter;
      }
    })
    .map((item) => word.indexOf(item));

  return caps;
};

console.log(capitals('ReGexB'));
console.log(capitals('CodEWaRs'));

//Alternative solution
var capitalsIndex = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};
