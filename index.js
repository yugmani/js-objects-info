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

//Property value shorthand
// ********************************************

//We may use existing variables as values for property names.

// if properties have the same names as variables, then the use-case of making a property from a variable is so common, that there's a special property value shorthand to make it shorter.

// eg. for { name : name } just write { name }
function makeUser(name, age) {
  return {
    name, // instead of-> name : name
    age, // instead of-> age : age
    //...
  };
}

// Property names limitations
// ----------------------------------------

// A variable cannot have a name equal to one of language-reserved words
// But for an object property, there’s no such restriction.
// Property names can be any strings or symbols ( a special type for identifiers)

// Property existence test, “in” operator
// *********************************************

// In javaScript, it’s possible to access any property. There will be no error if the property doesn’t exist!
// Reading a non-existing property just returns 'undefined'.
const student = {
  name: 'Miraj',
  age: 23,
  college: 'SMC',
  gpa: undefined,
};

console.log(student.name); //Miraj
console.log(student.grade); //undefined ->the property grade doesn't exist

//There’s also a special operator "in" for that.
// syntax:  "key" in object

console.log('age' in student); //true
console.log('grade' in student); //false
let key = 'college';
console.log(key in student); //true

console.log(student.gpa); //undefined ->no such property??
console.log('gpa' in student); //true ->technically exists
// It’s when an object property exists, but stores undefined

// The “for…in” loop
// *****************************************

//To walk over all keys of an object, there exists a special form of the loop: for..in.
for (let key in student) {
  console.log(key); //name, age, collete, gpa
}

// Instead of 'key' as looping variable inside the loop, 'for(let prop in obj)' is also widely used.
for (let prop in student) {
  console.log(student[prop]); //Miraj, 23, SMC, undefined
}

//Ordered like an object
// -------------------------------------

// if we loop over an object, do we get all properties in the same order they were added?
// integer properties are sorted, others appear in creation order.
//if the keys are non-integer, then they are listed in the creation order,
//The “integer property” term here means a string that can be converted to-and-from an integer without a change. eg. '49'

// Tasks
// **************************************

// 1. Hello, object
// --------------------------------------------

// Write the code, one line for each action:
// Create an empty object user.
const myUser = new Object();
// Add the property name with the value John.
myUser.name = 'John';
// Add the property surname with the value Smith.
myUser.surname = 'Smith';
console.log(myUser); //{name: "John", surname: "Smith"}
// Change the value of the name to Pete.
myUser.name = 'Pete';
console.log(myUser); //{name: "Pete", surname: "Smith"}
// Remove the property name from the object.
delete myUser.name;
console.log(myUser); //{surname: "Smith"}

// 2. Check for emptiness
// --------------------------------------------

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 ? 'Yes!' : 'No.';
};

let schedule = {};
console.log(`Is it empty? ${isEmpty(schedule)}`); //Yes!

schedule['8:30'] = 'coding time';
console.log(`Is it empty? ${isEmpty(schedule)}`); //No.

// 3. Sum object properties
// --------------------------------------------

//We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
let mySalary = {};
// If salaries is empty, then the result must be 0.
const sumObjectProperties = (obj) => {
  if (Object.keys(obj).length !== 0) {
    let sum = 0;
    for (let prop in obj) {
      sum += obj[prop];
    }
    return sum;
  }
  return 0;
};

console.log(sumObjectProperties(salaries)); //390
console.log(sumObjectProperties(mySalary)); //0;

// 4. Multiply numeric property values by 2
// --------------------------------------------

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.
const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
    // obj[key] = obj[key] * 2;  //without checking type string value returns null;
  }
};

multiplyNumeric(menu);
console.log(menu);
// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// codewars.com
// *********************************************

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
