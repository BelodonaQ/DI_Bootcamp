

const urlFetch = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";


async function getGifts(url){
  try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed. Status: ${response.status}`);
  } 
  const gifObject = await response.json();
  console.log(gifObject);
 } catch(error) {
  console.error("There was a problem fetching the GIF", error);
 }
}

getGifts(urlFetch);

// Exercise 2

const fetchUrl = 'https://api.giphy.com/v1/gifs/search' + '?q=sun' + '&limit=10' + '&offset=2' + '&api_key=JJfngKy3otdENd8vwBku8CFmBXRxvdol';

async function getSunGifs(url) {
  try {
    const response = await fetch(url);
    if (!response.ok){
      throw new Error(`Request failed. Status: ${response.status}`);
    }
    const gifObject = await response.json();
    console.log(gifObject);

  } catch(error) {
    console.error("there was an error", error);
  }

}

getSunGifs(fetchUrl);

// 3

const starships = 'https://www.swapi.tech/api/starships/9/';

async function getStarships(url){
  try {
    const response = await fetch(url);
    if (!response.ok){
      throw new Error(`Failed Req: ${response.status}`)
    } 
    const ship = await response.json();
    console.log(ship.result);
  } catch(error) {
    console.error("there was an error", error);
  }
}

getStarships(starships);


// 🌟 Exercise 4: Analyze

// Instructions

// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); // the new promise will resolve 2 seconds after calling the function. the console will display 'calling' in the meantime (instant to the function call).