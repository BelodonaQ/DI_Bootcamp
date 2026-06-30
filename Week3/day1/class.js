function listFruits () {
    if(true) {
        const fruit1 = "orange"; //it exists in block scope
        let fruit2 = "avocado"; //it exists in block scope
        var fruit3 = "banana"; // it exists in function scope
    }

    //console.log(fruit1);
    //console.log(fruit2);
    console.log(fruit3);
}

listFruits();



function ages(myage){
  const myAge = 28
  const mAge = myAge * 2
  const dAge = myAge * 1.2
  console.log("Mom is" + mAge + "and dad is" + dAge)
}

ages()

function herAge (myAge){
  const mom = 40
  return mom
}
herAge()

const nummer = (multiply, add, subtract, divide) => {
  prompt(input("enter number"))
}

// define function (Kyle Simpson)

// exercise 1

// function expressions means a function that's held inside of a variable
const myFunc = function (){
  console.log(`this is a function expression`)
}

myFunc()

// arrow functions 
// what's an implicit return

// document object model - essentially means to connect html elements to javascript, in order to control it like an object

