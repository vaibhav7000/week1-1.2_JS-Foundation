// programming languages are used to create applications / programs
// each programming language has its own advantage to create specific application
// the whole logic of the application / program is written using the programming language (js, py, go) and when there is time to run the application the language will be converted down to 0's and 1's (interpreted) or the 0's and 1's file (compiled languages) will be presented to the machine and the application will run according to the logic written inside using the programming language

// programming languages are bifercated into interpreted and compiled language
// interpreted -> languages that are compiled down into 0's and 1's at the run time of application (partially or full run)
// compiled -> languages that are compiled into 0's and 1's directly (fully or will not run)

// run-times means when the program / application is started

// programming are again bifercated into use of the number of threads at single point of time
// single-threaded -> languages that can only use single core / thread to run the application and these application runs the code line by line because they cannot use other threads to run the other line of code.
// multi-threaded -> languages that can use multiple threads to run the application. hence they can run multiple line of code using other threads

// all programming languages can context switch
// cores / threads are used by the applications / programs so that they can run
// core / thread runs the applications logic line by line.

// But we can use mutiple cores for multi-threaded languages and hence each cores runs the logic provided to it line by line.

console.log('How the things are going');
console.log('the things are going great');

// variables are use to store data inside it using "let" and "const". The data can be Number, String, boolean, undefined, null (simple primitives) or complex primitives that are objects and arrays (reference types playing with address of variable)

// undefined means: “This variable exists, but no value has been assigned.” usually present when we does not set value when declaring the variable
// null means the value is set to no value (empty) // the value is set intentionally as no value
let firstName = 'vaibhav';
let lastName = 'chawla';

console.log(firstName);
console.log(lastName);

const fullName = 'vaibhav chawla'; // variables created using const cannot be value or data type wise
let age = 23;
let isMarried = false;

console.log('The full is ' + fullName + ' age is ' + age);

if (isMarried === true) {
  console.log('the person ' + fullName + ' is married');
} else {
  console.log('the person ' + fullName + ' is not married');
}

// loops are used to iterate over the repitative logic again and again based on some codition

let answer = 0;

for (let i = 0; i <= 10; i++) {
  answer = answer + i;
}

// arrays are used to agregate the data together and in js arrays are hetrogenous. the data present inside it will be get through indexes
const ages = [1, 2, 3, 4, 5, 6]; // since this variables is created using const its value and type cannot be changes, but since data type it holds is array (address) we can update the number of elements present inside the address but the address cannot be changed

const firstName2 = 'Swift'; // the value and the type (string) cannot be changed

for (let index = 0; index < ages.length; index++) {
  if ((ages[index] & 1) === 1) {
    console.log('the given number ' + ages[index] + ' is odd!');
  } else if ((ages[index] & 1) === 0) {
    console.log('the give number ' + ages[index] + ' is even!');
  }

  // even numbers when treated in binary always have last element as 0 and we are doing binary & with it which in case will make that 0
  // odd numbers have last element as 1 => doing & with it will always give 1
  // binary operators like &, | and ! are always faster than arthimetic opertors => try to solve the problem if it is possible to solve with binary operators
}

// using small brackets tell the compiler which operation you would like to perform first, the compiler lacks in this

// find the bigest number present inside the array
// the max_number (finite) that we can get inside the js is Number.MAX_VALUE (that will return us fintite number)
// the min_number (finite) that we can get inside the js is using -Number.MAX_VALUE (this will also return us finite number)

// the positive infinite number we can get is Number.POSITIVE_INFINITY / Infinity ( this does not has any value but will be greater than Number.MAX_VALUE) but belongs to the Number data type as data
// the negative infinite number we can get is Number.NEGATIVE_INFINITY / -Infinity

// Number is a class whose properties and methods (static) are used to get values and do operations on the Number data type

const maxFiniteNumber = Number.MAX_VALUE;
console.log(maxFiniteNumber);
const minFiniteValue = -Number.MAX_VALUE;
console.log(minFiniteValue);

// printing the infinite values and infinte values be always be greater than max and min finite always
const positiveInfinity = Number.POSITIVE_INFINITY;
const negativeInfinity = Number.NEGATIVE_INFINITY;

console.log('positve infinity ' + positiveInfinity);
console.log('negative infinity ' + negativeInfinity);

const collectionOfAges = [1, 3, 3, 4, 5, 55, 3, 42, 234, , 66];
console.log(collectionOfAges);
// , , represents an hole inside the array and its is not same as undefined or null. but when prints the present at hole it will be undefined. map, filter and forEach methods of array will skip this hole

let largestValue = Number.NEGATIVE_INFINITY;

for (let index = 0; index < collectionOfAges.length; index++) {
  if (largestValue < collectionOfAges[index]) {
    // we have found new largest element update the value
    largestValue = collectionOfAges[index];
  }
}

console.log(largestValue);

// objects (complex primitive => playing with data) are also used to aggregate data together of single entity (using key value pairs present inside the object) and we can refer to the properties using objectName["propertyName"] / object.propertyName. if no such property exist inside the object than it will return undefined. the safest way to get the value is using objectName["propertyName"] because if the key is kind of Number not set of characters than it will syntax error like user.10 but if we user['10'] it will be great

// creating an object in which we can define properties and methods that will belong to the object only
const user = {
  firstName: 'Vaibhav',
  lastName: 'Chawla',
  age: 23,
  isMarried: false,
  10: false, // if created the key using Number get the value using user['10']
  10.4: false,
};

console.log(user);
console.log(user['10']);
console.log(user['10.4']);

const allUsers = [];
allUsers[5] = 10; // the array will now contain 5 holes and holes are always different than undefined but when fetching the value inside the hole it will return undefiend
console.log(allUsers);

// reverse all the elements present inside the array
const collectionOfNames = [
  'Vaibhav',
  'Swift',
  'Javascript',
  'Backend',
  'SwiftUI',
];

// Destructing is a concise (sleekest) way to unpack values from arrays or properties from objects into distinct values that we can assign to individual variables, the assigning of individual values will be done in the same syntax as of creating arrays and object respectively.

const totalLength = collectionOfNames.length;

for (let index = 0; index < totalLength; index++) {
  [collectionOfNames[totalLength - index - 1], collectionOfNames[index]] = [
    collectionOfNames[index],
    collectionOfNames[totalLength - index - 1],
  ];
  // use the destructing the arrays and providing the values of individual elements here the individual elements represent the elements of array => value will be changed at that index

  [a, b] = [10, 20]; // use the concept of destructing the array and assigning their values to individual varibles, this syntax will create two variables a and b, if  will create a new "a" variable after this then it will give error because variables defined using let, const are picked up by the compiler before running the code and hence we cannot use variable before intialization. same with function the compiler will take it to the top (if present in global scope same for variables)
  console.log(a);
  console.log(b);
}

console.log(collectionOfNames);

const singleUser = {};

// Functions are used to absract the logic and also follows the DRY principle present in coding. Function will take inputs, do some heavy calculations over the inputs and then return that thing.

function findSum(a, b) {
  // here a and b are called parameters, in caller side of the function a, b we will be called them arguments, together they are sought of called inputs
  const sumValue = a + b;
  return sumValue;
}

const result = findSum(10, 20);
console.log(result);

const temp = {
  firstName: 'Vaibhav',
  lastName: 'Chawla',
};

// it tries to find firstName variable and then gets the value of it and create a key value pair
temp[firstName] = 'Swift'; // firstName is "Vaibhav" => it will sets the value as temp = {firstName: "Vaibhav", lastName: "Chawla", vaibhav: "Swift"}

console.log(temp);

// functions can take other functions as input if yes then we call that functions as callback function, because the main function will call back the function that it gets as parameter
