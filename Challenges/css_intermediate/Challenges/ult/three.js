console.log(`"8" + 2`);
console.log(Number("8") + 2);
console.log(Number("Eight") + 2);

const title = 'Learn js logic';



const newTitle = title.toLowerCase().replaceAll(" ", "-");
console.log(newTitle);


// line total calculator

const price = "13";
const quantity = "15"; 

const newPrice = Number(price);
const newQuan = Number(quantity);
const calc = newPrice + newQuan;
console.log(calc); 


// arrays n stuff

const school = {
  classes: [{teacher: 'Maya'}, {teacher: 'Avi'}]
}

const getTeacher = school.classes[1]; // grabbed the school variable and went to the classes contained within. then asked to be directed to the second teacher with [1].
console.log(getTeacher);

const people = ['Dana', 'Omer', 'Lior'];
people.shift(0);
people.push('Noa');
console.log(people);

// inventory

 const inventory = {
  isprice: {
    price: 24
  },
  instock: {
    stock: 12
  }
};


const inventory = {
  Chicken: {
    price: 24,
    stock: 12
  }
}


const item = "Chicken";
console.log(inventory[item].price);

inventory[item].stock -= 1;

console.log(inventory[item].stock);

//
const score = 91;

if (score >= 90){
  console.log("undefined score!");
} 
else if (score >= 60) {
  console.log("Noice score!")
}

function total(number){
  

  if (number >= 12){
    console.log("That's a lot of stuff");
  } else if (number <= 12){
    console.log("wait, how much stuff?");
  } else {
    console.log("idk what you're on")
  }
};

total(31)

const admin = 'nicoleshweister@gamigo.com'
const isAdmin = admin;


if (auth === true && yourEmail === email){
  console.log(admin);
} else {
  console.log("please log in")
}

function celciusToFarenheight(celcius){
  return celcius * 1.8 + 32;
}

const temperature = celciusToFarenheight(90);
console.log(temperature);