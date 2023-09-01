//topics to cover
// why to study so many functions????
// 1. function statements
// 2. function expression
// difference between function statement and function expression
// 3. function declaration
// 4. Anonymous function
// 5. named function expression
// 6. arrow function
// 7. higher order functions (dry)
// 8. map
// 9. reduce
// 10. filter
// 11. practice codes

// // ========================function statements aka function declaration============================
// functionStatement();
// function functionStatement() {
//   console.log(`function Statement :hoisting is possible`);
// }

// // ========================function expression
// //functionExpression(); //error
// var functionExpression = function () {
//   console.log(`function Expression : hoisting is not possible`);
// };
// functionExpression();

// // ========================Anonymous function============================
// // function () {}//error ==> a type of function statement
// //use case: 1
// (function (a,b) {
//     console.log(`use case of anonymous functions : self invoking function (hoisting is not possible)
//     ${a+b}  and where functions are assigned as values`);
// })(1,2);
// //use case : 2
// setTimeout(function () {
//     console.log("use case of anonymous functions : args of other functions");
// },0)
// // ========================named function expression============================
// let namedFunction = function xyz() {
//   //mixture of function declaration & function expression
//   console.log("named function : hoisting is not possible ");
//   //   console.log(xyz());  //will go in infinite execution of this function
// };
// namedFunction();
// // xyz() //error

// // =======================first class functions============================
// first class citizens
// the ability of a function to be used as a parameter , returned from a function, stored in a variable is called first class function

//  In JavaScript, functions are first-class citizens, which means you can:
// Assign functions to variables.
// Pass functions as arguments to other functions.
// Return functions from other functions.
// Store functions in data structures (like arrays or objects).

// // ========================arrow function ============================
// let arrFunc = () => {
//     console.log(`arrow function hoisting is not possible`);
// }
// arrFunc();

// function add(x, y) {
//   return x + y;
// }
// let sum = add;
// console.log(sum);//undefined,error
// let result = sum(1, 2);
// console.log(result);//error

// function sub(x, y) {
//   return x - y;
// }
// let minus = sub(3,2);
// let output = minus(1, 2);
// console.log(minus);//1
// console.log(output);//error

// ===================higher order functions  (dry)===============
//in every higher order func a first order func is needed
//example 1
// function callBack() {
//   console.log("call back function");
// }

// function higherOrder() {
//  callBack()
// }
// higherOrder();

// //=====================map==============
// //===========example 1
// let arr = [1, 2, 3, 4, 5];
// //double ==> [2, 4, 6, 8, 10]
// //triple ==>[3, 6, 9, 12, 15]
// // binary ==> ['1', '10', '11', '100', '101']

// const doubleValues = arr.map((double) => {
//   return double * 2;
// });
// console.log(doubleValues);
// const tripleVAlues = arr.map((triple) => {
//   return triple * 3;
// });
// console.log(tripleVAlues);

// const binaryValues = arr.map((binary) => {
//   return binary.toString(2);
// });
// console.log(binaryValues);
//=====exmaple 2 : calculate the square of numbers in an array and store them in a new array.
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   squaredNumbers.push(numbers[i] * numbers[i]);
// }

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// using higher order functions we can do
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(function (number) {
//   return number * number;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// //=====================filter==============
// to filter out array values base on some logic
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenValue = arr.filter((even) => {
//   return even % 2 === 0;
// });
// console.log(evenValue);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenValue = arr.filter((even) => even % 2 === 0);
// console.log(evenValue);

//no greater than 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const noGreaterThanTwo = arr.filter((number) => number >= 2);
// console.log(noGreaterThanTwo);

//============new
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function no(arrElements, x) {
//   return arrElements > x;
// }
// const noGreaterThanFour = arr.filter((numbers) => no(numbers, 4));
// const noGreaterThanThree = arr.filter((numbers) => no(numbers, 3));
// const noGreaterThanTwo = arr.filter((numbers) => no(numbers, 2));
// console.log(noGreaterThanTwo);
// console.log(noGreaterThanThree);
// console.log(noGreaterThanFour);

// //=====================reduce============== takes two parameters
// sum exampkle 1
//nonfunctional
// const arr = [1, 8, 3, 4];

// function findSum(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum = sum + arr[index];
//   }
//   return sum;
// }
// console.log(findSum(arr));
// //higher order function
// const reduce = arr.reduce((acc = 0, curr) => (acc = acc + curr));
// console.log(reduce);
//max example 2
//nonfunctional
// const arr = [1, 23, 312334, 235];

// function findMax(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));
// //higher order function
// const reduce = arr.reduce((arrValue, max) => {
//   if (arrValue > max) {
//     max = arrValue;
//   }
//   return max;
// }, 0);
// console.log(reduce);
//example 3
// const obj = [
//   { firstName: "sarah", lastName: "sajid", age: 90 },
//   { firstName: "ayesha", lastName: "hasnain", age: 12 },
//   { firstName: "sehla", lastName: "saleem", age: 5 },
// ];

//["sarah","ayesha","sehla"]
// const output = obj.map((value) => {
//   return value.firstName + " " + value.age;
// });
// console.log(output);

//[ayesha,sehla] ==>age less than 30
// const ageLessThan30 = obj
//   .filter((value) => {
//     return value.age < 30;
//   })
//   .map((value) => {
//     return value.firstName;
//   });
// console.log(ageLessThan30);

// aik asa array banao using map jis main is object ka saray first names aye
// output asa hona chaye: ["sarah", "ayesha", "sehla"]
const obj = [
  { firstName: "sarah", lastName: "sajid", age: 90 },
  { firstName: "ayesha", lastName: "hasnain", age: 12 },
  { firstName: "sehla", lastName: "saleem", age: 5 },
];
