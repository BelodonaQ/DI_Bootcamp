// #1


function funcOne() {
     const a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
} // undefined because funcOne wasn't invoked

// #1.1 - run in the console:
funcOne() // prints the alert text
// #1.2 What will happen if the variable is declared 
// with const instead of let ? assignement type error


//#2
const a = 0;
function funcTwo() {
     a = 5;
    
    
} // the variable hasn't been initialized within the function's scope - error

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ? nothing - still gives an error

//#3
function funcFour() {
    window.a = "hello";
    
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // undefined if no return is used
funcFive() // reference error because it doesn't understand what a is

//#4
// let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() // prints test not 1
// #4.2 What will happen if the variable is declared 
// with const instead of let ? changing the inner variable type to const doesn't change scope behaviour


// let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? same thing. it will give 5 inside the if statement and 2 outside of the if statement

 // Exercise 2 : Ternary operator

// Instructions

// Using the code below:

/*winBattle = () =>{
  const experiencePoints = winBattle(true) ? 10 :1;
  return experiencePoints;
  console.log(experiencePoints);
}*/

const winBattle = () => {return true};
const experiencePoints = winBattle() ? 10 :1;

console.log(experiencePoints);




//Transform the winBattle() function to an arrow function.
//Create a variable called experiencePoints.
//Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
//Console.log the experiencePoints variable.


// 🌟 Exercise 3 : Is it a string ?

// Instructions

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
//true
// console.log(isString([1, 2, 4, 0]));
//false

const isString = (a) => {
  
  if (typeof a === "string" ){
    return true;
  } else {
    return false;
  }
}

console.log(isString(13));

// 🌟 Exercise 4 : Find the sum

// Instructions

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const findSum = (a, b) => {
  return a + b;
}

console.log(findSum(13, 50));

// 🌟 Exercise 5 : Kg and grams

// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
// Function declaration
function kgToGrams(weightKg) {
  return weightKg * 1000;
}

console.log(kgToGrams(39)); // 39000


// Function expression
const kgToGramsExpression = function(weightKg) {
  return weightKg * 1000;
};

console.log(kgToGramsExpression(39)); // 39000


// Difference: function declarations are hoisted, function expressions are not usable before the line where they are created.


// One-line arrow function
const kgToGramsArrow = weightKg => weightKg * 1000;

console.log(kgToGramsArrow(39)); // 39000


// 🌟 Exercise 6 : Fortune teller

// Instructions

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function fortune(children, partner, locale, job){

 const message = `You will be a ${job} in ${locale}, and married to ${partner} with ${children} kids.`;
  document.getElementsByTagName("h2")[0].innerHTML = message;
  
})(5, 'Madeline', 'Germany', 'Architect');




// 🌟 Exercise 8 : Juice Bar

// Instructions

// You will use nested functions, to open a new juice bar.

// Part I:

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


function makeJuice(size){
  function addIngredients(first, second, third){
    console.log(`The client wants a ${size} drink containing ${first}, ${second} and ${third}.`);
  };
  addIngredients("Pears", "Peaches", "Grapes");
};

makeJuice("Medium");


function makeJuice(size){
  const ingredients = [];

  function addIngredients(first, second, third){
    ingredients.push(first, second, third);
  }

  function displayJuice(){
    const juicebar = document.getElementById('juicebar');
    juicebar.innerHTML(`The client wants a ${size} drink containing ${ingredients}`);
    
  }
  addIngredients("Apples", "Pears", "Grapes");
  addIngredients("Oranges", "Guava", "Peaches");
}

makeJuice('medium');

// Part II:

// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.