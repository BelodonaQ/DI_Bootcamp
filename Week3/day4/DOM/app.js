const title = document.getElementById('main-heading');
console.log('title');

title.style.color = 'red';


const movies = document.getElementsByClassName('list-items');
console.log('movies');




const contain = document.querySelector('div');
console.log('contain');

contain.style.backgroundColor = 'green';

// querySelectorAll selects all elements of a specific type. like div's or articles or buttons etc

// practicing for loops

for (let i = 0; i <= 9; i++){
  console.log('live')
}

for (let i = 0; i >= -9; i--){
  console.log("yikes");
  
}

// creating elements (in the list)

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li)

li.innerText = 'yoyoyo';
li.setAttribute('id', 'main-heading');

// how to navigate the DOM tree




