import React from 'react';
import './App.css';

import data from './data';

import SearchBar from './components/searchBar';
import SearchResults from './components/searchResults';

function App() {

  const spells = data

  return (
    <div className="App">
      <h1>DnD Spell Grabber</h1>
      <SearchBar/>
      <SearchResults spells={spells} />
    </div>
  );
}

export default App;