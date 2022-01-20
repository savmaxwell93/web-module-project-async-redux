import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

import data from './data';
import { getSpells } from './actions';

import SearchBar from './components/searchBar';
import SearchResults from './components/searchResults';

function App(props) {
  const { fetching, error, getSpells } = props;

  useEffect(() => {
    getSpells('');
  }, [])

  return (
    <div className="App">
      <h1>DnD Spell Grabber</h1>
      <SearchBar/>

      {
        (error !== '') && <h2>{error}</h2>
      }

      {
        fetching ? <h3>Searching for spells...</h3> : <SearchResults/>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSpells })(App);