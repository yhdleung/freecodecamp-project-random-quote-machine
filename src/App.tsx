import React, { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const API_URL = 'https://api.quotable.io/random';

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setQuote({ content: data.content, author: data.author }))
      .catch(error => console.error(error));
  }, []);

  function handleClick() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setQuote({ content: data.content, author: data.author }))
      .catch(error => console.error(error));
  }

  return (
    <div id="quote-box">
      <div id="text">{quote.content}</div>
      <div id="author">- {quote.author}</div>
      <button id="new-quote" onClick={handleClick}>New Quote</button>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content}" - ${quote.author}`)}`} target="_blank">Tweet Quote</a>
    </div>
  );
}

export default App;
