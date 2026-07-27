// 🌟 Exercise 1 : List of people

Instructions

const people = ["Greg", "Mary", "Devon", "James"];
people.shift(0);
people;


// Part I - Review about arrays

// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.
people[3] = "Jason";

// Write code to add your name to the end of the people array.

people.push('Seem');

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

people.indexOf('Mary');

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

people.slice(1, 4);

// Write code that gives the index of “Foo”. Why does it return -1 ?

const last = people.at(-1);
const last = people.length(-1);

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
