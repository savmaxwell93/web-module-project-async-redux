import React from 'react';

import SearchResult from './searchResult';

const SearchResults = (props) => {
    const {spells} = props;

    return(
      <div className="search-result-container">
        <div className="search-results">
          {spells.map(spell => {
              return <SearchResult key={spell.slug} spell={spell} />
          })}
        </div>
      </div>
    )
}

export default SearchResults