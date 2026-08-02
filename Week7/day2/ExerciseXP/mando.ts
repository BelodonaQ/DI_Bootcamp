// #1

const hi: String = 'Hello World';

// #2 
const age: Number = 30;
const namee: String = "John";

console.log(namee);
console.log(age);

// #3

let id: Number | String;
id = 'Falcone';
id = 2456789;

// #4



const mispar = (number: number): string => {
  if (number > 0){
    return 'positive';
  } 
  return 'negative';
}

// #5



function getDetails(user: string, age: number): [string, number, string] {
  const greeting = `Hello ${user}! You are ${age} years old.`;

  return [user, age, greeting];
}

getDetails('Shawn', 32);

// #6

type person = {
  name: string;
  age: number;
}

function createPerson (name: string, age: number): person {
  return {
    name,
    age
  };
}

// #7
const usernameInput = document.getElementById(
  "username"
) as HTMLInputElement;

usernameInput.value = "Alice";

// #8

function getAction(role: string): string {
  switch (role) {
    case "admin":
      return "Manage users and settings";

    case "editor":
      return "Edit content";

    case "viewer":
      return "View content";

    case "guest":
      return "Limited access";

    default:
      return "Invalid role";
  }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));


// #9

function greet(): string;
function greet(name: string): string;

function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));