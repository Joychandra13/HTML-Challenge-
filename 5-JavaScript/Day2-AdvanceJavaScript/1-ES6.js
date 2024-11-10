// ------------------------
   // ES6 (10 questions)
// ------------------------

// 1. What are arrow functions in ES6, and how are they different from regular functions? 

// Arrow functions in ES6 are a shorter way to write functions in JavaScript. They use the => symbol and make code simpler and cleaner.
// Here's how a regular function compares to an arrow function:

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
let add = (a, b) => a + b;

// Key Differences from Regular Functions:

// • Shorter and Simpler: Arrow functions use fewer words and symbols, which is great for small functions.

// • this Behavior: Arrow functions don't have their own this; they take this from the surrounding code. This is helpful when you need to keep this pointing to the right object, especially in methods or callbacks.

// • No arguments Object: Arrow functions don’t have their own arguments. If you need it, use regular functions or the rest operator ...args to gather arguments.

// • Cannot Be Used as Constructors: You can’t use new with arrow functions, so they’re not suitable for making objects.

// Here’s a quick example using this:

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` refers to Person object here
  }, 1000);
}

let person = new Person();

// Arrow functions are best for short, simple functions where this should be the same as the surrounding context. Regular functions are better when you need flexibility, like using this in different ways.




// 2. What is destructuring assignment in ES6, and how does it work with arrays and objects? 

// Destructuring assignment in ES6 is a way to pull values from arrays or objects and assign them to variables quickly. It makes code shorter and easier to read.

// • Array Destructuring: With arrays, you can grab values based on their position:
let numbers = [1, 2, 3];
let [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
// Here, a, b, and c get the first, second, and third values from the array.

// • Object Destructuring: With objects, you can pull values by their property names:
let person1 = { name1: "Joy", age1: 22 };
let { name1, age1 } = person1;

console.log(name1); // "Joy"
console.log(age1);  // 22
// Here, name and age get values directly from the object.

// You can also set default values or rename variables in both cases. Destructuring helps keep code clean, especially when dealing with large arrays or objects.

   // • Project: Write a function that takes an object with properties and logs each property individually.
   let person3 = { name: "Joy", age: 22, city: "Tangail" };
   logProperties(person3);

   function logProperties(obj) {
      for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
      }
    }




// 3. Explain `let`, `const`, and `var` keywords. When should you use each? 

// In JavaScript, let, const, and var are used to declare variables, but they behave differently. let is used when the value of a variable may change later. 

// • If you are tracking a changing value like age, you would use let:
let age2 = 25;
age2 = 26; // age is updated to 26

// • const is used for values that should not change, such as a constant like pi. Once a const value is set, it cannot be reassigned:
const pi = 3.14;
pi = 3.14159; // Error! Can't change a const value

// • var is the old way of declaring variables, but it can lead to problems because it has a wider scope than let and const. It's better to avoid using var in modern JavaScript:
var name2 = "John";
name2 = "Doe"; // value changes, but avoid using var

// Generally, you should use let for values that change and const for values that stay the same. Avoid var to prevent scope issues.




// 4. What is the `spread` operator, and how can it be used with arrays and objects? 

// The spread operator (...) in JavaScript is used to expand or copy elements from arrays or properties from objects. It makes it easier to work with complex data like arrays or objects by spreading their elements or properties into new arrays or objects.

// • With Arrays:
// You can use the spread operator to copy elements from one array to another or combine multiple arrays.

let numbers1 = [1, 2, 3];
let moreNumbers = [...numbers1, 4, 5]; // Spread numbers and add more elements
console.log(moreNumbers); // [1, 2, 3, 4, 5]

// • With Objects:
// You can use the spread operator to copy properties from one object to another or merge objects.

let person2 = { name: "Alice", age: 25 };
let newPerson = { ...person2, city: "Wonderland" }; // Add new property
console.log(newPerson); // { name: "Alice", age: 25, city: "Wonderland" }

// In short, the spread operator makes it easy to copy, combine, or add new elements and properties in arrays and objects.

   // • Project: Merge two arrays using the spread operator.
   let array1 = [1, 2, 3];
   let array2 = [4, 5, 6];
   let NewArray = [...array1, ...array2];
   console.log(NewArray); // [1, 2, 3, 4, 5, 6]




// 5. How does template literals work in ES6, and how does it make string interpolation easier? 

// Template literals in ES6 make it easier to work with strings by allowing you to embed expressions directly inside strings. They use backticks (`) instead of regular quotes, and you can insert variables or expressions using ${}.

// For example, you can create strings with variables like this:
let name3 = "Alice";
let Q = `Hello, ${name3}!`;
console.log(Q); // "Hello, Alice!"

// With template literals, you don’t need to use + to concatenate strings. You can also include more complex expressions:
let d = 5;
let e = 10;
let result = `The sum of ${d} and ${e} is ${d + e}.`;
console.log(result); // "The sum of 5 and 10 is 15."




// 6. What are `default parameters` in ES6, and how do they improve function flexibility? 

// In ES6, default parameters let you set default values for function parameters. This means if a parameter is missing or undefined when the function is called, it will use the default value instead. This makes functions more flexible and prevents errors from missing arguments.
// Here’s an example:

function Q1(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

Q1("Alice"); // "Hello, Alice!"
Q1();        // "Hello, Guest!" (uses default value)

// In this case, if name is not provided, it defaults to "Guest". Default parameters help simplify functions by removing the need to check for missing values inside the function.




// 7. Explain what `Map` and `Set` are in ES6 and how they differ from objects and arrays. 

// In ES6, Map and Set are new data structures that offer more flexible ways to store data than objects and arrays.

// • Map: A Map is like an object but allows keys of any type (not just strings). You can store and retrieve data in pairs (key-value), making it useful when you need non-string keys.
let map = new Map();
map.set("name", "Alice");
map.set(1, "one");

console.log(map.get("name")); // "Alice"
console.log(map.get(1));      // "one"

// • Set: A Set is like an array but only holds unique values, which means it won’t allow duplicates. It’s useful for keeping a list of distinct items.

let set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate, will be ignored

console.log(set); // Set {1, 2}

   // • Project : Create a simple dictionary with `Map` to store key-value pairs.
   let dictionary = new Map();

   // Add entries
   dictionary.set("apple", "A red or green fruit");
   dictionary.set("banana", "A yellow fruit");
   dictionary.set("cat", "A small animal");
   console.log(dictionary.get("apple")); // "A red or green fruit"
   
   // Loop through entries
   for (let [key, value] of dictionary) {
      console.log(`${key}: ${value}`);
   }
   // Output:
   // apple: A red or green fruit
   // banana: A yellow fruit
   // cat: A small animal



// 8. What is the purpose of the `for...of` loop, and how is it different from `for...in`? 

// The for...of loop in JavaScript is used to loop through values in iterable objects like arrays, strings, Maps, and Sets. It goes through each value directly, making it useful when you only need the items in a collection, not their keys or indexes.
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit); // Outputs each fruit: "apple", "banana", "cherry"
}
// In contrast, the for...in loop is used to loop through the keys or properties of an object. It’s best for objects, as it returns each key.
let person4 = { name: "Alice", age: 25 };
for (let key in person4) {
  console.log(key); // Outputs "name" and "age"
}




// 9. Explain the concept of `Promise` in JavaScript. How do you use `.then()` and `.catch()`? 

// A Promise in JavaScript is a way to handle asynchronous operations, like loading data from a server. It represents a task that will either finish successfully or fail in the future. A promise can be in one of three states:

// • Pending: The operation is still running.
// • Resolved (Fulfilled): The operation finished successfully.
// • Rejected: The operation failed.

// Using .then() and .catch(): When a promise is successful (resolved), .then() is used to handle the result. If the promise fails (rejected), .catch() is used to handle the error.

let promise = new Promise((resolve, reject) => {
  let success = true; // Imagine this is the result of an operation
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed.");
  }
});

promise
  .then(result => console.log(result))   // "Task completed!" if resolved
  .catch(error => console.log(error));    // "Task failed." if rejected

   // • Project : Create a promise that resolves after 2 seconds and logs a message.
   let promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task completed!");
      }, 2000); // 2 seconds
    });
    
    promise1.then((message) => console.log(message)); // "Task completed!" after 2 seconds
    



// 10. What is async/await, and how does it work with Promises? 

// async/await is a simpler way to work with Promises in JavaScript. It makes asynchronous code look and behave more like regular, synchronous code, making it easier to read and understand.

// How It Works:
// • async: Add async before a function to make it return a Promise automatically.
// • await: Use await inside an async function to wait for a Promise to complete. It pauses the code until the Promise resolves, then returns the result.
// Here’s an example:

async function fetchData() {
  let data = await new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
  console.log(data); // "Data loaded" after 2 seconds
}

fetchData();

// In this example, await pauses fetchData until the Promise resolves, so "Data loaded" logs after 2 seconds. async/await makes handling Promises straightforward without chaining .then().