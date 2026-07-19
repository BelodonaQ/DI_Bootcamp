// 🌟 Exercise 1 : Colors

// Instructions

// Using this array :



// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const color = colors.forEach((color) => {
  if (color === 'Violet'){
    console.log('Yeah');
    
  } else console.log('No');
})


function displayclrs(){
  console.log(`#1 choice is ${colors[0]}, number #2 choice is ${colors[1]}, number #3 choice is ${colors[2]}`);
  
}

displayclrs();



// 🌟 Exercise 2 : Colors #2

// Instructions

// Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
 const ordinal = ["th","st","nd","rd"];
 console.log(`1${ordinal[1]} choice is ${colors[0]}, 2${ordinal[2]} choice is ${colors[1]}, 3${ordinal[3]} choice is ${colors[2]}`)
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// Exercise 3 : Analyzing

// Instructions

// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // the result should print 'bread' and everything in the vegetables array, then 'chicken' and every item in the fruits array after.

// ------2------
const country = "USA";
console.log([...country]);
// i think this is just going to print 'USA'

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// should be undefined  

// 🌟 Exercise 4 : Employees

// Instructions

// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.


// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.


const myMap = (myArray, myFn) => {
  const result = [];
}

const myFilter = (myArray, myFn) => {

}

const myReduce = (myArray, myFn, myInitialValue) => {

}

const myMap = (myArray, myFn) => {
  const result = [];

  for (let i = 0; i < myArray.length; i++) {
    result.push(myFn(myArray[i], i, myArray));
  }

  return result;

};



const myFilter = (myArray, myFn) => {
  const result = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myFn(myArray[i], i, myArray)) {
      result.push(myArray[i]);
    }
  }

  return result;
};

const myReduce = (myArray, myFn, myInitialValue) => {
  let accumulator = myInitialValue;

  for (let i = 0; i < myArray.length; i++) {
    accumulator = myFn(accumulator, myArray[i], i, myArray);
  }

  return accumulator;
};

// encapsulation, inheritence, polymorphism

// week 3 refresh memory in octopus
// DOMException
// setTimeout
// one that connects academic speak to stories. with both recalls how how these story categories' content is digested. this may need to happen through well rounded sdenarios. implementing these things and drawing parallels of varibale length so that it spans the story if i wish.