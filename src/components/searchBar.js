import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSpells } from '../actions';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getSpells(searchTerm)
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

    return(
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" placeholder="Search for a spell"/>
          <button>Search</button>
        </form>
      </div>
    )
}

export default connect(null, { getSpells })(SearchBar)