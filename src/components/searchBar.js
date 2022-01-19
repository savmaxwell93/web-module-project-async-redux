import React from 'react';

const SearchBar = () => {
    return(
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search for a spell"/>
          <button>Search</button>
        </form>
      </div>
    )
}

export default SearchBar