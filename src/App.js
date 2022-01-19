import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>DnD Spell Grabber</h1>
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search for a spell"/>
          <button>Search</button>
        </form>
      </div>
      <div className="search-results">
        <div className="spell-container">
          <h2>Name:</h2>
          <div className="spell-info">
            <p>Level</p>
            <p>Casting Time:</p>
            <p>Range/Area:</p>
            <p>School:</p>
            <p>Damage/Effect:</p>
          </div>
          <div className="spell-description">
            <p>Description</p>
            <p>Higher Levels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;