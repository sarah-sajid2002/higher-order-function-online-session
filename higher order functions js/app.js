//topics to cover
// why to study so many functions????
// 1. function statements
// 2. function expression aka function declaration
// difference between function statement and function expression :hoisting
// 3. function declaration aka function expression
// 4. Anonymous function
// 5. named function expression
// 6. arrow function
// 7. higher order functions (dry)
// 8. map
// 9. reduce
// 10. filter
// 11. practice codes
// 12. template literals with arrays

// ===========class code starts here===============
//function statements
// function abc() {
//   console.log("function statement");
// }
// abc();
// // function expression aka function declaration
// var xyz = function () {
//   console.log("function expression");
// };
// xyz();
// difference between function statement and function expression
//hoisting
// console.log(a); //undefined
// var a = 9;

// abc();
// function abc() {
//   console.log("function statement"); //function statement
// }

// xyz(); //error ==>xys is not a function
// var xyz = function () {
//   console.log("function expression hoisting is not allowed"); //error
// };

// 4. Anonymous function
// (function (a, b, c) {
//   console.log(`the sum of a b c is ${a + b + c}`);
// })(1, 2, 3); //6

// 5. named function expression
// let myFunc = function abc(a, b) {
//   console.log(a + b);
// };
// myFunc(2, 3); //5
// abc(3, 4); //7 ==>error

// 6. arrow function or fat arrow function (es6)
// let arrowFunc = () => 2 + 3;

// console.log(arrowFunc()); //5
// const sum = arrowFunc();
// console.log(sum);

// 7. higher order functions (dry)
// function ==> parameter
// function ==> return
// function hi() { //callback function
//   console.log("hi");
// }

// function higherOrder() { //higher order function DRY ==> dont repeat yourself
//   return hi();
// }

// higherOrder(); //hi
//===============map
//arr

//arr ==> every element *2
//arrayNew ==> every element *2 [2,4,6,8,10.....]
//simple js
// function double() {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     let value = arr[index] * 2;
//     newArr.push(value);
//   }
//   return newArr;
// }
// console.log(double());

// function triple() {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     let value = arr[index] * 3;
//     newArr.push(value);
//   }
//   return newArr;
// }
// console.log(triple());

// double, triple, binary
// value = arr[1] ==> 2 *2 =4
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // function DoubleValue(index) {
// //   return index * 2;
// // }
// const doubleMagic = arr.map((index) => index * 2);
// console.log(doubleMagic);
// const tripleMagic = arr.map((index) => index * 3);
// console.log(tripleMagic);
// const binaryValue = arr.map((index) => index.toString(2));
// console.log(binaryValue);

//search toString

// =====filter======

// let arr = [22, 0, 1, 2, 5, 24, 345, 51, 2, 3, 4];
// //even

// function even() {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(even());

// const evenFunction = arr.filter((index) => {
//   return index % 2 === 0;
// });
// const oddFunction = arr.filter((index) => {
//   return index % 2 != 0;
// });
// console.log(oddFunction);

// const noGreaterThan2 = arr.filter((index) => {
//   return index > 2;
// });
// console.log(noGreaterThan2);

// ==========reduce ===========
//does not return array , returns a single value (sum ,max, min)
// let arr = [1, 2, 3, 4]; //10
// function add() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(add());

// const addition = arr.reduce((index, sum) => {
//   return (sum = sum + index);
// }, 0);
// console.log(addition);

// //sum = 0 ;i=0 ;1
// sum = 0+1
// // sum = 0 + 1 = 1
// sum = 1; i = 1;2
//     sum = 1 + 2;
// //sum = 1+2=3

// 12. template literals with arrays
let arr = [22, 0, 1, 2, 5, 24, 345, 51, 2, 3, 4];
// const oddFunction = arr.filter((index) => {
//   return index % 2 != 0;
// });
// console.log(oddFunction);
// console.log("the odd numbers of array are :  ");
// console.log(oddFunction);
console.log(`my array is : ${arr}`);
