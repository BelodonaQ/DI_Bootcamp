// Instructions

// Using this object :

let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const groceries2 = () => {
  let groceries3 = groceries.fruits;
  return groceries3;
}

groceries2();

// Create another arrow function named cloneGroceries.

const cloneGroceries = () => {
  let user = client;
  user = "Betty";
  return user;
  
}

console.log(cloneGroceries());
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.


// starting over

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

displayGroceries();

const cloneGroceries = () => {
  let user = client;

  client = "Betty";

  console.log("user:", user);     // John
  console.log("client:", client); // Betty

  let shopping = groceries;

  groceries.totalPrice = "35$";
  groceries.other.paid = false;

  console.log("shopping:", shopping);
  console.log("groceries:", groceries);
};

cloneGroceries();