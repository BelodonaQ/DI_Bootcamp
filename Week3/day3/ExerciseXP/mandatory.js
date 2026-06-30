// exercise #1

function displayNumbersDivisible() {
  let sum = 0;

  for (let count = 0; count <= 500; count++) {
    if (count % 23 === 0) {
      console.log(count);
      sum += count;
    }
  }

  console.log(`Sum : ${sum}`);
}

displayNumbersDivisible();

// #2

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item] -= 1;
    }
  }

  return total;
}

console.log(myBill());
console.log(stock);

// #3

function changeEnough(itemPrice, amountOfChange) {
  const quarters = amountOfChange[0] * 0.25;
  const dimes = amountOfChange[1] * 0.1;
  const nickels = amountOfChange[2] * 0.05;
  const pennies = amountOfChange[3] * 0.01;

  const totalChange = quarters + dimes + nickels + pennies;

  return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// 4

function hotelCost() {
  let nights = prompt("How many nights would you like to stay?");

  while (nights === null || nights.trim() === "" || isNaN(Number(nights))) {
    nights = prompt("Please enter a valid number of nights.");
  }

  return Number(nights) * 140;
}

function planeRideCost() {
  let destination = prompt("What is your destination?");

  while (
    destination === null ||
    destination.trim() === "" ||
    !isNaN(Number(destination))
  ) {
    destination = prompt("Please enter a valid destination.");
  }

  destination = destination.trim();

  if (destination === "London") {
    return 183;
  } else if (destination === "Paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost() {
  let days = prompt("How many days would you like to rent the car?");

  while (days === null || days.trim() === "" || isNaN(Number(days))) {
    days = prompt("Please enter a valid number of days.");
  }

  days = Number(days);

  let cost = days * 40;

  if (days > 10) {
    cost = cost * 0.95;
  }

  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  const total = hotel + plane + car;

  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`
  );
  console.log(`The total vacation cost is: $${total}.`);

  return total;
}

totalVacationCost();

// #5

const container = document.getElementById("container");
console.log(container);

const lists = document.getElementsByClassName("list");

lists[0].children[1].textContent = "Richard";

lists[1].children[1].remove();

const myName = "Seem";

for (let i = 0; i < lists.length; i++) {
  lists[i].children[0].textContent = myName;
}

for (let i = 0; i < lists.length; i++) {
  lists[i].classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const allListItems = document.getElementsByTagName("li");

for (let i = 0; i < allListItems.length; i++) {
  if (allListItems[i].textContent === "Dan") {
    allListItems[i].style.display = "none";
  }

  if (allListItems[i].textContent === "Richard") {
    allListItems[i].style.border = "1px solid black";
  }
}

document.body.style.fontSize = "20px";

if (container.style.backgroundColor === "lightblue") {
  alert(
    `Hello ${lists[0].children[0].textContent} and ${lists[0].children[1].textContent}`
  );
}

// number #6

const navBar = document.getElementById("navBar");

navBar.setAttribute("id", "socialNetworkNavigation");

const ul = document.querySelector("#socialNetworkNavigation ul");

const newLi = document.createElement("li");

const logoutText = document.createTextNode("Logout");

newLi.appendChild(logoutText);

ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);

// #7

const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://placehold.co/100x150?text=Harry+Potter",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://placehold.co/100x150?text=The+Hobbit",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

for (let book of allBooks) {
  const bookDiv = document.createElement("div");

  const bookDetails = document.createElement("p");
  bookDetails.textContent = `${book.title} written by ${book.author}`;

  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.style.width = "100px";

  if (book.alreadyRead === true) {
    bookDetails.style.color = "red";
  }

  bookDiv.appendChild(bookDetails);
  bookDiv.appendChild(bookImage);

  section.appendChild(bookDiv);
}
