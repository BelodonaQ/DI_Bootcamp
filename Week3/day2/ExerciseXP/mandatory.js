// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared
// // with const instead of let ?

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared
// // with const instead of let ?

// //#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// //let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared
// // with const instead of let ?

// //#5
// //let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ?

// // #2

// const winBattle = () => {
//     return true;

// }

// let experiencePoints = 5;

//     if (winBattle() === true){
//       experiencePoints = 10;
//     }

// console.log(experiencePoints);

// // #3

// const isString = (ns) => {
//   const findOut = typeof(ns)
//   if (findOut === "string"){
//     return true
//   } else{
//     return false
//   }

// }

// // #4

// const findSum = (x, y) => {
//   const sum = x + y;
//   return sum
// }

// console.log(findSum(3, 5))

// // #5

// // Function declaration
// function kgToGramsDeclaration(kg) {
//   return kg * 1000;
// }

// console.log(kgToGramsDeclaration(5)); // 5000

// // Function expression
// const kgToGramsExpression = function(kg) {
//   return kg * 1000;
// };

// console.log(kgToGramsExpression(5)); // 5000

// // Function declarations are hoisted, but function expressions are not usable before they are defined.

// // One-line arrow function
// const kgToGramsArrow = kg => kg * 1000;

// console.log(kgToGramsArrow(5)); // 5000

// // #6

// (function(job, geo, partner, children)  {
//   document.getElementById("sentence").innerHTML = `You will be a ${job} in ${geo}, and married to ${partner} with ${children} kids.`
// })("developer", "israel", "sarah", 5)

// #7

/*(function(username) {
  const nav = document.getElementById("welcome");
  const getUser = document.createElement("div");
  const getImg = document.createElement("img");
  const getName = document.createElement("h4");
  getImg.src = "profile.jpg";
  getImg.alt = `${username}'s profile picture`;
  getName.textContent = `Welcome home ${username}`;
  getUser.appendChild(getImg);
  getUser.appendChild(getName);
  nav.appendChild(getUser);
})("Seem");*/

// #8

// the real week 3 mando excercises

//🌟 Exercise 1 : Find the numbers divisible by 23
//Instructions
//Create a function call displayNumbersDivisible() that takes no parameter.
//In the function, loop through numbers 0 to 500.
//Console.log all the numbers divisible by 23.
//At the end, console.log the sum of all numbers that are divisible by 2.

function displayNumbersDivisible() {
  let count = 0;
  while (count <= 500) {
    if (count % 23 === 0) {
      console.log(count);
    }
    count++;
  }
}

console.log(displayNumbersDivisible());

