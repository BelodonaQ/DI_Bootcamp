// console.log(Math.floor(13));

// js comes with built in types like numbers, strings, booleans, objects; typescript takes it further by extending this list and introduces new types like any, where, tuple etc


// type annotation with functions



// debugging typescript applications in vscode
// to do this enable the sourceMap: true feature (done by default after creating the tsconfig) which maps the generated js code

let age = 20;
if (age > 18){
  age += 10;
}

// typescript fundamentals

// how to play with primitive types in typescript
// though annotating is unnecessary, we could use it

let sales: number = 123456789; // to seperate a large number use _ in between digits

let course: string = "TypeScript"; // typescript already understands the value type of a variable

let isPublished: boolean = true; 
let level; // since this function isn't assigned a value or type by definition, typescript will assign it 'any' but the any type kinda defeats the purpose of typescript in general

function render(document: string){
  console.log(document);
}

// Arrays

// Tuples - a fixed length array where each value has a particular type
let user: [string, number, boolean] = ["hello", 12345, false];
user.push(true); // can still push new values into the array. Tuples are useful when there are only 2 values in an array, other than that it can become hard to read/understand 

// Enums - these are lists of related constants. Enums use PascalCase

const small = 1;
const medium = 2;
const large = 4;

const enum Size {Small, Medium, Large};

function add(x: number, y: string){
  return x + y
}
add(4, "hi");

function greet(name: string, age: number){
  console.log(`Hi ${name}, happy birthday because you are now ${age} years old`);
}


// add annotations to the following variables
let name: string = 'Jane';
let numFromBirth: number = 23;
let isEmployed: boolean = false;

function subtract(x: number, y: number): number {
  return x - y;
}
subtract(12, 12);

const isSunny: boolean = true;
const isRaining: boolean = false;

let perfect = isSunny && isRaining;


let houseExists = false;
function toggleStatus(houseExists: boolean): boolean{
  return !houseExists;
}

const daNumbs: number[] = [1, 2, 3, 4, 5, 6];
console.log(daNumbs.push(7));