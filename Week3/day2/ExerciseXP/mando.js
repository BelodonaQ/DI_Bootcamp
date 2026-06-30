// #1
function funcOne() {
    const a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console: reference error
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? TypeError

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?

/*
With let a = 0:

funcThree() will alert:
"inside the funcThree function 0"

funcTwo() then changes the global variable a from 0 to 5.

funcThree() will then alert:
"inside the funcThree function 5"

So the order is:

1. funcThree() -> shows 0
2. funcTwo() -> changes a to 5
3. funcThree() -> shows 5


If a is declared with const instead of let:

const a = 0;

Then funcTwo() will cause an error because this line tries to reassign a:

a = 5;

But const variables cannot be reassigned.

So running funcTwo() would give an error like:

TypeError: Assignment to constant variable.

Simple rule:

let = the value can be changed later
const = the value cannot be reassigned later
*/