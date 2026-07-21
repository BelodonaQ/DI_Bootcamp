const robotContainer = document.querySelector("#robot-container");
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('form');

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

// console.log(robots.length);

// const robot = robots[0];

// const card = document.createElement("div");
// card.classList.add("robot-card");
// robotContainer.appendChild(card);


// dynamic use of the cards

function createRobotCards(robot) {
  const card = document.createElement("div");
  card.classList.add("robot-card");
  


  const robotImage = document.createElement("img");
  robotImage.src = robot.image;
  robotImage.alt = robot.name;
  card.appendChild(robotImage);

  const nameHeading = document.createElement("h2");
  nameHeading.textContent = robot.name;
  card.appendChild(nameHeading);

  const usernameParagraph = document.createElement("p");
  usernameParagraph.textContent = robot.username;
  card.appendChild(usernameParagraph);

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = robot.email;
  card.appendChild(emailParagraph);
  return card;
}

createRobotCards(robots[0]);

function displayRobots(robotsList){
  robotContainer.innerHTML = "";

  if (robotsList.length === 0){
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = "No robots found";
    noResultsMessage.classList.add('no-results');

    robotContainer.appendChild(noResultsMessage);
    return;
  }

  robotsList.forEach(function(robot) {
    const card = createRobotCards(robot);
    robotContainer.appendChild(card);
  }

  );
}

displayRobots(robots);

searchInput.addEventListener("input", function(event){
  const searchValue = event.target.value.toLowerCase();

  const matchingRobots = robots.filter(function (robot){
    return robot.name.toLowerCase().includes(searchValue)
  });

  displayRobots(matchingRobots);
});

searchForm.addEventListener("submit", function (event){
  event.preventDefault();
});