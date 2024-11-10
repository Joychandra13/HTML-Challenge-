   // Day 1:  Basic JavaScript & Problem Solving
                                                

// -------------------------------------
   // Step-1: JavaScript Fundamentals
// -------------------------------------

// 1. What are the different data types in JavaScript?
// ________________________________________________________

// Here's a simplified overview of JavaScript data types:
// 1. Primitive Types :
// Number: Any number, integer or decimal. Example: 
    let age = 25;
    console.log(typeof age);

// BigInt: For really large integers. Example: 
    let bigInt = 9007199254740991n;
    console.log(typeof bigInt);

// String: Text values. Example: 
    let name = "Alice";
    console.log(typeof name);

// Boolean: true or false values. Example: 
    let completed = true;
    console.log(typeof completed);

// Undefined: A variable that hasn’t been given a value. Example: 
    let counter;
    console.log(typeof counter);

// Null: Intentionally empty or "nothing." Example: 
    let obj = null;
    console.log(typeof obj); 

// Symbol: Unique value for object properties. Example: 
    let id = Symbol('id');
    console.log(typeof id);

    
// 2. Complex Data Types :
// Object: Collection of properties. Example: 
    let person = { name: "Alice", age: 25 };
    console.log(typeof person);

// Function: A block of reusable code. Example:
    function greet() {
        return "Hello!";
    }
    console.log(typeof greet);




// 2. What is the difference between `var`, `let`, and `const`?
// ___________________________________________________________________

// In JavaScript, var, let, and const are used to declare variables, but they differ in how they work. The var keyword is function-scoped, meaning it’s accessible throughout the entire function it’s declared in, or globally if declared outside of any function. You can both update and redeclare var variables. However, var is hoisted to the top of its scope and starts with undefined, which can lead to bugs if you try to use it before it’s assigned a value.
 var Nam = "Alice";

// On the other hand, let is block-scoped, which means it’s only accessible within the block (e.g., inside { ... }) where it’s declared. You can update a let variable, but you cannot redeclare it within the same block. Like var, let is hoisted, but it cannot be used before declaration, helping to prevent accidental errors.
 let ag = 25;

// Lastly, const is also block-scoped but is used for values that should not be reassigned. Once you assign a value to a const variable, you cannot change it or redeclare it. This makes const a good choice for values that should stay constant. It is also hoisted but cannot be accessed before declaration. In practice, let is ideal for variables that may change, const is best for fixed values, and var is generally avoided in modern JavaScript because let and const are more reliable.
 const city = "Paris";




// 3. Explain JavaScript's `==` vs. `===` operators.
// ______________________________________________________

// In JavaScript, == and === are comparison operators, but they work differently. The == operator checks if two values are equal in value only, so it performs type conversion if the values are different types. This means 5 == "5" is true because JavaScript converts the string "5" to the number 5 before comparing. However, this loose comparison can sometimes lead to unexpected results.

// The === operator, known as the "strict equality" operator, checks if two values are equal in both value and type. So, 5 === "5" is false because the number 5 and the string "5" are different types. Using === is generally safer because it avoids automatic type conversion and ensures a more accurate comparison. Example: 
let string = "20";
let number = 20;

console.log(string == number);  // true (values are the same, types are ignored)
console.log(string === number); // false (values are the same, but types are different)


// In short, use == for loose equality (value only) and === for strict equality (value and type). Most of the time, === is preferred to avoid unexpected type conversions.




// 4. What is type coercion in JavaScript? Give an example.
// __________________________________________________________________

// Type coercion in JavaScript is when JavaScript automatically converts one data type to another to make a comparison or operation work. This happens with the == operator, arithmetic operations, or when combining different types (like numbers and strings). For example, if you add a number and a string, JavaScript will convert the number to a string to make the operation possible. Example:

let a = "5" + 3 ;
let b = "5" - 3 ;

console.log(a);  // Output: "53" (number 3 is converted to string "3")
console.log(b);  // Output: 2 (string "5" is converted to number 5)

// In the first example, 3 becomes "3" and is added to "5", resulting in "53". In the second example, "5" is converted to 5 for subtraction, so the result is 2. Type coercion can be useful but sometimes leads to unexpected results, so it’s good to be aware of it.




// 5. Explain the concept of scope in JavaScript.
// __________________________________________________________________

// In JavaScript, scope refers to the visibility or accessibility of variables in different parts of your code. It determines where a variable can be used and where it can't. There are mainly two types of scope: global scope and local scope.

// • Global scope means a variable is accessible anywhere in your code. If you declare a variable outside of any function, it has global scope.

// • Local scope means a variable is only accessible within the function or block where it was declared. If you declare a variable inside a function, it can only be used inside that function. For example:

let globalVar = "I am global"; // Global scope

function exampleFunction() {
    let localVar = "I am local"; // Local scope
    console.log(globalVar); // Can access global variable
    console.log(localVar);   // Can access local variable
}

exampleFunction(); // Outputs: I am global, I am local
// console.log(localVar); // Error: localVar is not defined (not accessible here)

// In this example, globalVar can be accessed anywhere, while localVar can only be accessed inside exampleFunction. Understanding scope is important for managing variables and avoiding conflicts in your code!




// 6. What is hoisting in JavaScript?
// __________________________________________________________________

// Hoisting in JavaScript is a feature where variable and function declarations are moved to the top of their scope before the code runs. This means you can use a variable or call a function before you actually declare it in your code. For example, if you declare a variable with var, it will be hoisted to the top but will start as undefined until you assign a value to it. In contrast, variables declared with let and const are also hoisted, but trying to use them before their declaration will result in an error. Function declarations are fully hoisted, allowing you to call them before they appear in the code. Here’s a simple example:

console.log(myVar); // Output: undefined
var myVar = 10;

sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}
// In this example, myVar shows undefined because it is hoisted, while sayHello works fine because function declarations are fully hoisted. Understanding hoisting helps you avoid mistakes in your code!




// 7. What are template literals, and how are they used?
// __________________________________________________________________

// Template literals are a feature in JavaScript that makes it easier to work with strings. They are enclosed by backticks (`) instead of regular quotes. Template literals allow you to include variables and expressions inside strings using ${} syntax, which makes it simple to create dynamic text.

// You can use template literals to write multi-line strings without needing special characters for line breaks. For example:

let Name = "Alice";
let greeting = `Hello, ${Name}! Welcome to our site.`;
console.log(greeting); // Output: Hello, Alice! Welcome to our site.

let multiLine = `This is a string
that spans multiple lines.`;
console.log(multiLine);

// In this example, greeting uses a template literal to include the variable name, and multiLine shows how you can create strings that span several lines easily. Template literals make string handling in JavaScript more flexible and readable!




// 8. Explain what a higher-order function is in JavaScript.
// __________________________________________________________________

// A higher-order function in JavaScript is a function that either takes another function as a parameter or returns a function. Higher-order functions allow you to work with functions like data, making it easy to add extra behavior or control the timing of functions. Common examples of higher-order functions are map, filter, and reduce, which take functions as arguments to process arrays. For example:

function greet(name) {
    return `Hello, ${name}!`;
}

function callWithGreeting(func, name) {
    return func(name);
}

console.log(callWithGreeting(greet, "Alice")); // Output: Hello, Alice!

// In this example, callWithGreeting is a higher-order function because it takes greet (another function) as an argument. Higher-order functions are powerful tools in JavaScript that help make your code more flexible and reusable!




// 9. What are arrow functions, and how are they different from regular functions?
// __________________________________________________________________

// Arrow functions are a shorter way to write functions in JavaScript, introduced with ES6. They use the => (arrow) syntax and are especially helpful for writing small, simple functions. Unlike regular functions, arrow functions don’t have their own this context; they inherit this from the surrounding scope, which can make them easier to use inside other functions or objects. Here's an example of an arrow function and a regular function:


// Regular function
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const greetArrow = (name) => `Hello, ${name}!`;

// Both functions do the same thing, but the arrow function is more concise. Also, arrow functions are better for cases where you don’t need a unique this value.




// 10. What is an Immediately Invoked Function Expression (IIFE)?
// __________________________________________________________________

// An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that runs as soon as it is defined. It’s written inside parentheses to make it an expression, and then followed by another set of parentheses to immediately call it. IIFEs are useful for creating a temporary scope, so variables inside them don’t interfere with other code. Here’s an example of an IIFE:

(function() {
    let message = "Hello, IIFE!";
    console.log(message); // Output: Hello, IIFE!
})();

// In this example, the function runs right away, and message is only accessible within the IIFE. This makes IIFEs great for keeping code private and avoiding variable conflicts.




// -------------------------------------
   // Step-2: Functions and Objects
// -------------------------------------


// 1. Explain the concept of closures in JavaScript.
// __________________________________________________________________

// Closures in JavaScript are a powerful feature that allows a function to remember its outer scope even after that scope has finished executing. A closure is created when a function is defined inside another function, and it has access to the outer function’s variables. This means the inner function can use or modify those variables, even when it is called outside the outer function. Here’s a simple example:

function outerFunction() {
    let outerVariable = "I am from the outer scope!";

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable
    }

    return innerFunction; // Returning the inner function
}

const myClosure = outerFunction(); // myClosure now holds innerFunction
myClosure(); // Output: I am from the outer scope!

// In this example, innerFunction forms a closure that remembers outerVariable. When myClosure is called, it still has access to outerVariable, even though outerFunction has finished executing. Closures are useful for data encapsulation and maintaining state in your applications!




// 2. What is the `this` keyword, and how does it behave in different contexts?
// __________________________________________________________________

// The this keyword in JavaScript refers to the current context in which a function is executed. Its value can change depending on how a function is called, which can sometimes be confusing.

// • Global Context: In the global scope (outside any function), this refers to the global object. In a browser, this is window.
console.log(this); // Output: Window (in a browser)

// • Object Method: When a function is called as a method of an object, this refers to that object.
const parson = {
    name: "Alice",
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
parson.greet(); // Output: Hello, Alice!

// • Constructor Function: When using a constructor function with the new keyword, this refers to the newly created object.
function Person(name) {
    this.name = name;
}
const person1 = new Person("Bob");
console.log(person1.name); // Output: Bob

// • Arrow Functions: Arrow functions do not have their own this. Instead, they inherit this from the surrounding context.
const person2 = {
    name: "Charlie",
    greet: () => {
        console.log(`Hello, ${this.name}!`); // 'this' is not bound to person2
    }
};
person2.greet(); // Output: Hello, undefined!




// 3. How do you create an object in JavaScript?
// __________________________________________________________________

// You can create an object in JavaScript using several methods, but the most common ways are using object literals and constructor functions.

// 1. Object Literals: This is the simplest way to create an object. You define the object with curly braces {}, and inside, you can specify properties and their values.
const person3 = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// 2. Constructor Functions: You can also create objects using constructor functions, which are regular functions that you can call with the new keyword. Inside the function, you use this to set properties.
function Parson(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}.`);
    };
}

const person4 = new Parson("Bob", 25);

// Both methods allow you to create objects, but object literals are more straightforward for creating single objects, while constructor functions are useful for creating multiple instances of similar objects.




// 4. What is the difference between `null` and `undefined`?
// __________________________________________________________________

// In JavaScript, null and undefined are both special values, but they are used in different ways.
// • undefined means that a variable has been declared but has not yet been assigned a value. It is the default value for uninitialized variables. For example:

let name1;
console.log(name1); // Output: undefined

// • null is an intentional assignment that means "no value" or "empty." It is used when you want to explicitly indicate that a variable should have no value. For example:

let age1 = null;
console.log(age1); // Output: null




// 5. How do you copy an object in JavaScript? Explain shallow vs. deep copy.
// __________________________________________________________________

// In JavaScript, you can copy an object in two main ways: shallow copy and deep copy.
// Shallow Copy: A shallow copy creates a new object that copies the properties of the original object. However, if the original object has nested objects (objects within objects), the nested objects are not copied; instead, the new object will reference the same nested objects. This means changes to the nested objects will affect both the original and the copied object. You can create a shallow copy using methods like Object.assign() or the spread operator {...}:

const original = { name: "Alice", address: { city: "Wonderland" } };
const shallowCopy = { ...original };

shallowCopy.address.city = "New City"; 
console.log(original.address.city); // Output: New City (affected original)

// Deep Copy: A deep copy creates a new object and recursively copies all properties and nested objects, so changes to the copied object do not affect the original. You can create a deep copy using libraries like Lodash (_.cloneDeep()) or by using JSON.parse() and JSON.stringify() for simple objects.

const original1 = { name: "Alice", address: { city: "Wonderland" } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "New City"; 
console.log(original1.address.city); // Output: Wonderland (original remains unchanged)




// 6. Explain how `call`, `apply`, and `bind` work in JavaScript.
// __________________________________________________________________

// In JavaScript, call, apply, and bind are methods used to control the value of this in a function and how that function is executed.
// • call: The call method allows you to call a function with a specified this value and individual arguments. It executes the function immediately.

function greet() {
    console.log(`Hello, ${this.name}!`);
}

const person5 = { name: "Alice" };
greet.call(person5); // Output: Hello, Alice!

// • apply: The apply method is similar to call, but it takes an array of arguments instead of listing them individually. It also executes the function immediately.

function introduce(age, job) {
    console.log(`I'm ${this.name}, I'm ${age} years old and I work as a ${job}.`);
}

const person6 = { name: "Bob" };
introduce.apply(person6, [30, "developer"]); // Output: I'm Bob, I'm 30 years old and I work as a developer.

// • bind: The bind method creates a new function with a specific this value and returns it. This new function can be called later, so it does not execute immediately.

function greet() {
    console.log(`Hello, ${this.name}!`);
}

const person7 = { name: "Charlie" };
const greetCharlie = greet.bind(person7);
greetCharlie(); // Output: Hello, Charlie!




// 7. What is the prototype chain, and how does inheritance work in JavaScript?
// __________________________________________________________________

// The prototype chain in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. Every JavaScript object has a hidden internal property called [[Prototype]], which refers to another object. When you try to access a property on an object, JavaScript first looks at the object itself, and if it doesn’t find it there, it follows the [[Prototype]] link to the next object in the chain. This continues until it finds the property or reaches the end of the chain (which is null).

// Inheritance:
// Inheritance in JavaScript allows one object to inherit properties and methods from another. This is often done using constructor functions and the new keyword, or by using ES6 classes. Here’s a simple example using a constructor function:

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy makes a noise.
dog.bark();  // Output: Buddy barks.

// In this example, Dog inherits from Animal. The Dog instance can access the speak method from Animal through the prototype chain. This allows for a flexible way to create and manage objects and their relationships, promoting code reuse in JavaScript!





// -------------------------------------
   // Step-3: Arrays and Strings
// -------------------------------------

// 1. What are some common array methods in JavaScript?
// __________________________________________________________________

// JavaScript provides many useful methods to work with arrays, making it easy to manipulate and manage data. Here are some common array methods:

// • push(): Adds one or more elements to the end of an array and returns the new length of the array.
const fruits = ["apple", "banana"];
fruits.push("orange"); // fruits is now ["apple", "banana", "orange"]

// • pop(): Removes the last element from an array and returns that element.
const lastFruit = fruits.pop(); // lastFruit is "orange"; fruits is now ["apple", "banana"]

// • shift(): Removes the first element from an array and returns that element.
const firstFruit = fruits.shift(); // firstFruit is "apple"; fruits is now ["banana"]

// • unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("grape"); // fruits is now ["grape", "banana"]

// • map(): Creates a new array by applying a function to each element of the original array.
const lengths = fruits.map(fruit => fruit.length); // lengths is [5, 6]

// • filter(): Creates a new array with elements that pass a test defined by a function.
const longFruits = fruits.filter(fruit => fruit.length > 5); // longFruits is ["banana"]

// • forEach(): Executes a provided function once for each array element.
fruits.forEach(fruit => console.log(fruit)); // Logs each fruit to the console

// These methods are just a few of the many available in JavaScript, allowing for efficient manipulation of arrays and making it easier to work with collections of data!




// 2. How does `map()` differ from `forEach()` in arrays?
// __________________________________________________________________

// The map() and forEach() methods in JavaScript are both used to iterate over arrays, but they serve different purposes and have different behaviors.

// • map(): The map() method creates a new array by applying a given function to each element of the original array. It transforms the elements and returns the new array without changing the original one.

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // doubled is [2, 4, 6]

// • forEach(): The forEach() method, on the other hand, executes a provided function for each element in the array but does not return a new array. It is mainly used for performing side effects, like logging or modifying variables, rather than creating a new collection.

numbers.forEach(num => console.log(num * 2)); // Logs 2, 4, 6 to the console




// 3. Explain the `filter()` method. How does it work?
// __________________________________________________________________

// The filter() method in JavaScript creates a new array with elements that pass a test defined by a function. It works by going through each item in the original array and applying the test function. If an element meets the condition (returns true in the function), it is included in the new array; if not, it is skipped. For example:

const Numbers = [1, 2, 3, 4, 5];
const evenNumbers = Numbers.filter(num => num % 2 === 0); // evenNumbers is [2, 4]

// In this example, filter() checks if each number is even. Only the numbers that pass the test (2 and 4) are included in the new array. filter() is useful when you need to get a specific subset of items from an array.




// 4. What does the `reduce()` method do, and how is it used?
// __________________________________________________________________

// The reduce() method in JavaScript takes all the elements in an array and combines them into a single value. It does this by using a function that processes each element in the array one by one. The reduce() function takes two arguments: an accumulator (to keep the running total) and the current value (the current element in the array). You can also set an initial value for the accumulator, which is optional. Here’s an example that calculates the sum of all numbers in an array:

const nums = [1, 2, 3, 4];
const total = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // total is 10

// In this example, reduce() starts with 0 as the initial value and adds each number in the array to the accumulator. The final result, 10, is the total sum of the numbers. reduce() is powerful for tasks like summing values, finding averages, or merging objects!




// 5. How do you find the length of a string and reverse it?
// __________________________________________________________________
// To find the length of a string in JavaScript, you can use the .length property, which returns the number of characters in the string. To reverse a string, you can split it into an array, reverse the array, and then join it back into a string. Here’s how to do both:

const str = "hello";

// Find length
const length = str.length;
console.log(`Length: ${length}`); // Output: Length: 5

// Reverse the string
const reversed = str.split('').reverse().join('');
console.log(`Reversed: ${reversed}`); // Output: Reversed: olleh

// Explanation:
// • length gives the length of the string.
// • split('') turns the string into an array of characters.
// • reverse() reverses the array.
// • join('') turns the array back into a string.
// This is a simple way to find the length and reverse a string in JavaScript.




// 6. What are template literals, and how can they be used for string manipulation?
// __________________________________________________________________

// Template literals are a way to create strings in JavaScript that makes it easy to include variables and expressions inside the string. They are written using backticks (`) instead of quotes, and you can insert variables directly using ${variable}.

// With template literals, you can easily combine text and variables, use expressions, and format strings across multiple lines.
// Here’s an example:

const name4 = "Alice";
const age4 = 25;

// Using template literals
const introduction = `Hello, my name is ${name4} and I am ${age4} years old.`;
console.log(introduction); // Output: Hello, my name is Alice and I am 25 years old.

// Template literals are also helpful for multi-line strings:

const message = `This is a long message
that spans multiple lines
for better readability.`;
console.log(message);




// 7. How do you remove duplicates from an array?
// __________________________________________________________________

// To remove duplicates from an array in JavaScript, you can use a Set or the filter() method.
// Using a Set: A Set only keeps unique values, so converting an array to a Set and then back to an array removes duplicates.
const numbers1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers1 = [...new Set(numbers1)];
console.log(uniqueNumbers1); // Output: [1, 2, 3, 4, 5]

// Using filter(): You can also use the filter() method with indexOf to keep only the first occurrence of each value.
const numbers2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers2 = numbers2.filter((item, index) => numbers2.indexOf(item) === index);
console.log(uniqueNumbers2); // Output: [1, 2, 3, 4, 5]

// Both methods work well, but using a Set is simpler and faster for removing duplicates.
 




// ---------------------------------------------------
   // Step-4: Control Structures and Error Handling
// ---------------------------------------------------

// 1. How does JavaScript handle implicit type conversion?
// __________________________________________________________________

// JavaScript uses implicit type conversion (also known as type coercion) when it automatically converts one data type to another to complete an operation. This can happen with operators like +, ==, or when values are combined. JavaScript tries to make sense of the operation by converting types to match, which can sometimes lead to unexpected results.
// For example:

// When using + with a number and a string, JavaScript converts the number to a string and concatenates them:
const result = "5" + 10; 
console.log(result); // Output: "510" (number 10 is converted to a string)

// When using == to compare a string and a number, JavaScript converts the string to a number:
const isEqual = "5" == 5; 
console.log(isEqual); // Output: true (string "5" is converted to number 5)

// In summary, JavaScript often converts types automatically to make operations work, but it's essential to be cautious, as this can lead to unexpected behavior. For strict comparison without type conversion, use === instead of ==.




// 2. What does `typeof` return for different data types?
// __________________________________________________________________

// The typeof operator in JavaScript is used to check the type of a value. It returns a string indicating the type. Here’s what typeof returns for different data types:

// • Numbers: Returns "number" for numbers, including NaN.
typeof 42; // "number"

// • Strings: Returns "string" for text values.
typeof "hello"; // "string"

// • Booleans: Returns "boolean" for true or false.
typeof true; // "boolean"

// • Objects: Returns "object" for objects, arrays, and also null (which is a known JavaScript quirk).
typeof { name: "Alice" }; // "object"
typeof [1, 2, 3];         // "object"
typeof null;              // "object"

// • Undefined: Returns "undefined" for variables that have no value.
typeof undefined; // "undefined"

// • Functions: Returns "function" for functions.
typeof function() {}; // "function"

// • Symbols: Returns "symbol" for symbols, a unique data type.
typeof Symbol(); // "symbol"

// Using typeof helps to quickly check the type of a variable, which can be useful in debugging and handling different types in your code.




// 3. What is NaN, and how can you check if a value is NaN?
// __________________________________________________________________

// NaN stands for "Not-a-Number" in JavaScript. It is a special value that represents an undefined or unrepresentable numerical result, often produced when a mathematical operation fails, like dividing zero by zero or trying to perform arithmetic on a non-numeric value.

// To check if a value is NaN, you can use the built-in function isNaN(), which returns true if the value is NaN and false otherwise. However, isNaN() has some quirks, as it will return true for non-numeric strings as well.

// For a more reliable check, you can use the combination of Number.isNaN(), which checks strictly for NaN without converting the value:

const value1 = NaN;
const value2 = "hello";

console.log(isNaN(value1));          // Output: true
console.log(isNaN(value2));          // Output: true (quirk)
console.log(Number.isNaN(value1));   // Output: true
console.log(Number.isNaN(value2));   // Output: false

// In summary, NaN indicates a failed numeric operation, and you can check for it using isNaN() or Number.isNaN() for a stricter approach.





// ------------------------------------------
   // Step-5: Type Conversion and Compariso
// ------------------------------------------

// 1. How does JavaScript handle implicit type conversion?
// __________________________________________________________________

// JavaScript uses implicit type conversion (also known as type coercion) when it automatically converts one data type to another to complete an operation. This can happen with operators like +, ==, or when values are combined. JavaScript tries to make sense of the operation by converting types to match, which can sometimes lead to unexpected results.
// For example:

// When using + with a number and a string, JavaScript converts the number to a string and concatenates them:
const result1 = "5" + 10; 
console.log(result1); // Output: "510" (number 10 is converted to a string)

// When using == to compare a string and a number, JavaScript converts the string to a number:
const isEqual1 = "5" == 5; 
console.log(isEqual1); // Output: true (string "5" is converted to number 5)

// In summary, JavaScript often converts types automatically to make operations work, but it's essential to be cautious, as this can lead to unexpected behavior. For strict comparison without type conversion, use === instead of ==.




// 2. What does `typeof` return for different data types?
// __________________________________________________________________

// The typeof operator in JavaScript is used to check the type of a value. It returns a string indicating the type. Here’s what typeof returns for different data types:

// • Numbers: Returns "number" for numbers, including NaN.
typeof 42; // "number"

// • Strings: Returns "string" for text values.
typeof "hello"; // "string"

// • Booleans: Returns "boolean" for true or false.
typeof true; // "boolean"

// • Objects: Returns "object" for objects, arrays, and also null (which is a known JavaScript quirk).
typeof { name: "Alice" }; // "object"
typeof [1, 2, 3];         // "object"
typeof null;              // "object"

// • Undefined: Returns "undefined" for variables that have no value.
typeof undefined; // "undefined"

// • Functions: Returns "function" for functions.
typeof function() {}; // "function"

// • Symbols: Returns "symbol" for symbols, a unique data type.
typeof Symbol(); // "symbol"

// Using typeof helps to quickly check the type of a variable, which can be useful in debugging and handling different types in your code.




// 3. What is NaN, and how can you check if a value is NaN?
// __________________________________________________________________

// NaN stands for "Not-a-Number" in JavaScript. It is a special value that represents an undefined or unrepresentable numerical result, often produced when a mathematical operation fails, like dividing zero by zero or trying to perform arithmetic on a non-numeric value.

// To check if a value is NaN, you can use the built-in function isNaN(), which returns true if the value is NaN and false otherwise. However, isNaN() has some quirks, as it will return true for non-numeric strings as well.

// For a more reliable check, you can use the combination of Number.isNaN(), which checks strictly for NaN without converting the value:

const value3 = NaN;
const value4 = "hello";

console.log(isNaN(value3));          // Output: true
console.log(isNaN(value4));          // Output: true (quirk)
console.log(Number.isNaN(value3));   // Output: true
console.log(Number.isNaN(value4));   // Output: false

// In summary, NaN indicates a failed numeric operation, and you can check for it using isNaN() or Number.isNaN() for a stricter approach.




// --------------------------
   // Step-6: Miscellaneous
// --------------------------

// 1. What is event delegation, and how does it work?
// __________________________________________________________________

// Event delegation is a technique in JavaScript where you handle events at a higher level in the DOM rather than directly on individual elements. This approach takes advantage of the event bubbling feature, where events "bubble up" from the target element to its parent elements.
// Instead of adding event listeners to multiple child elements, you can add a single event listener to a parent element. When an event occurs on a child element, it will bubble up to the parent, allowing you to handle the event in one place. This improves performance and makes it easier to manage events, especially in dynamic lists. Here’s how it works:

const list = document.getElementById('myList');

list.addEventListener('click', (event) => {
    // Check if a list item was clicked
    if (event.target.tagName === 'LI') {
        console.log(`You clicked on: ${event.target.textContent}`);
    }
});

// In this example, when you click on any <li> in the list, the click event bubbles up to the parent <ul>, which has the event listener. This way, you only need one listener for all list items, making it efficient and easy to manage! If you add more <li> elements later, they automatically get the same event behavior without needing additional listeners.




// 2. What are default parameters in JavaScript?
// __________________________________________________________________

// Default parameters in JavaScript allow you to set default values for function parameters. If a caller does not provide an argument for a parameter, the default value is used. This feature makes functions more flexible and reduces the need for manual checks inside the function.
// You can define default parameters by assigning a value in the function declaration. Here’s an example:

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet();        // Output: Hello, Guest!

// In this example, the greet function has a default parameter name set to "Guest". When you call greet() without an argument, it uses the default value. This makes your code cleaner and easier to understand, as you don’t have to handle missing arguments explicitly.




// 3. What is the difference between synchronous and asynchronous programming?
// __________________________________________________________________

// The main difference between synchronous and asynchronous programming lies in how tasks are executed and how they affect the flow of a program.
// Synchronous programming means tasks are executed one after another, in order. The program waits for each task to finish before moving on to the next one. This can be straightforward but may lead to delays, especially if a task takes a long time, as the program becomes unresponsive during that wait.
// Example of synchronous code:

console.log("Start");
console.log("Doing something...");
console.log("End");
// In this case, the messages are logged one after another.

// Asynchronous programming, on the other hand, allows tasks to run independently without blocking the program. This means the program can start a task and then move on to other tasks while waiting for the first one to finish. This approach is useful for handling operations that take time, like fetching data from a server.
// Example of asynchronous code:

console.log("Start");

setTimeout(() => {
    console.log("Doing something...");
}, 1000);

console.log("End");

// In this example, "Start" and "End" are logged immediately, while "Doing something..." appears after a 1-second delay, allowing the program to keep running.




// 4. How does the `setTimeout` function work, and what is its use?
// __________________________________________________________________

// The setTimeout function in JavaScript is used to run a piece of code after a specified delay, measured in milliseconds. It takes two main arguments: a function to execute and the time (in milliseconds) to wait before executing that function. This is useful for delaying actions, creating pauses, or managing timed events in your applications.
// Here’s how it works:

console.log("Start");

setTimeout(() => {
    console.log("This message appears after 2 seconds.");
}, 2000);

console.log("End");

// In this example, "Start" is logged immediately, "End" is logged next, and then after a 2-second delay, the message inside the setTimeout function is logged.

// The setTimeout function allows you to schedule code execution without blocking the main thread, making it a handy tool for creating animations, timeouts, or handling events that should occur after a delay. After the specified time, the callback function runs, and you can perform any action you need.




// 5. What is the purpose of `JSON.stringify()` and `JSON.parse()`?
// __________________________________________________________________

// The functions JSON.stringify() and JSON.parse() are used in JavaScript to work with JSON (JavaScript Object Notation), which is a popular format for exchanging data.

// JSON.stringify(): This function converts a JavaScript object or value into a JSON string. It is useful when you want to send data over the network or save it as a string, like in local storage.
// Example:

const obj1 = { name: "Alice", age: 25 };
const jsonString1 = JSON.stringify(obj1);
console.log(jsonString1); // Output: '{"name":"Alice","age":25}'

// JSON.parse(): This function takes a JSON string and converts it back into a JavaScript object. It is helpful when you receive data in JSON format and want to use it in your code.
// Example:

const jsonString2 = '{"name":"Alice","age":25}';
const obj2 = JSON.parse(jsonString2);
console.log(obj2.name); // Output: Alice




// 6. How can you handle asynchronous code in JavaScript?
// __________________________________________________________________

// In JavaScript, you can handle asynchronous code using several methods, including callbacks, promises, and async/await. Each method allows you to manage operations that take time, like network requests or timers, without blocking the main thread.

// 1. Callbacks: You pass a function as an argument to another function. This function runs when the asynchronous task is complete. However, too many nested callbacks can lead to "callback hell," making the code hard to read.

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output: Data received
});


// 2. Promises: A promise represents a value that may be available now or in the future. You can use .then() to handle the result when the promise is fulfilled and .catch() for errors.

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

fetchData().then((data) => {
    console.log(data); // Output: Data received
});


// 3. Async/Await: This is a modern syntax that makes working with promises easier. You can use async to define a function that returns a promise and await to pause the execution until the promise is resolved.

async function fetchData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
    console.log(data); // Output: Data received
}

fetchData();

// Using these methods helps you manage asynchronous code effectively, making your applications responsive and efficient!




// 7. Explain the concept of the Event Loop in JavaScript.
// __________________________________________________________________

// The Event Loop in JavaScript is a fundamental part of how JavaScript handles asynchronous operations. JavaScript is single-threaded, meaning it can only do one thing at a time. However, it needs to manage tasks like handling events, making network requests, and running timers without blocking the main execution. Here’s how the Event Loop works:

// • Call Stack: JavaScript runs code in the call stack, executing functions one at a time. When a function completes, it gets removed from the stack.

// • Web APIs: When an asynchronous operation (like a setTimeout or an API call) is initiated, it goes to the Web APIs, which handle the task outside the main thread.

// • Callback Queue: Once the asynchronous task is done, its callback function is added to the callback queue, waiting to be executed.

// • Event Loop: The Event Loop continuously checks if the call stack is empty. If it is, it takes the first function from the callback queue and pushes it onto the call stack to be executed.

// • This allows JavaScript to manage multiple tasks efficiently. For example:

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");

// In this example, "Start" and "End" are logged immediately, while "Timeout" is logged after 1 second, showing how the Event Loop allows asynchronous code to run without blocking the main thread.