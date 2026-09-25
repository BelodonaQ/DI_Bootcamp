import './App.css'
import { useState } from 'react';

const quotes = [
  {
    id: 1,
    quote: "He took my thing",
    author: "Jimmy Leon"
  },
  {
    id: 2,
    quote: "Rendelsham forest is a scam!",
    author: "Disgruntled Pilot"
  },
  {
    id: 3,
    quote: "You're not making any sense at all mate",
    author: "Witty Jack"
  },
  {
    id: 4,
    quote: "This is another quote",
    author: "Jason Statham or Jason Bateman"
  }
];

const colors = [
  "#275DAD",
  "#7B2D62",
  "#286653",
  "#9A3B24",
  "#53449C"
];

function App() {
  
  const [currentQuote, setCurrentQuote] = useState (quotes[0]);
  const [remainingQuotes, setRemainingQuotes] = useState (quotes.slice(1))
  // colors
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const isRoundFinished = remainingQuotes.length === 0;

  function changeColor() {
    const availableColors = colors.filter(
      (color) => color !== currentColor
    );

    const randomIndex = Math.floor(Math.random() * availableColors.length)

    setCurrentColor(availableColors[randomIndex]);
  }

  function handleNewQuote() {
    if (remainingQuotes.length === 0){
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuotes.length)
    const nextQuote = remainingQuotes[randomIndex];

    const updatedRemainingQuotes = remainingQuotes.filter(
      (quote) => quote.id !== nextQuote.id
    );

    setCurrentQuote(nextQuote);
    setRemainingQuotes(updatedRemainingQuotes);
    changeColor();
  };

  function handleRestart() {
    setCurrentQuote(quotes[0]);
    setRemainingQuotes(quotes.slice(1));
    changeColor();
  }



  return (
  <div className="quote-page" style={{ backgroundColor: currentColor }}>
    <div className="quote-card">
      <h1 style={{ color: currentColor }}>{currentQuote.quote}</h1>

      <p>{currentQuote.author}</p>

      <button
        type="button"
        onClick={isRoundFinished ? handleRestart : handleNewQuote}
        style={{ backgroundColor: currentColor, color: "white" }}
      >
        {isRoundFinished ? "Start Again" : "New Quote"}
      </button>
    </div>
  </div>
);
}

export default App
