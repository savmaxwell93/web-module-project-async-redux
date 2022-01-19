import React from 'react';

const SearchResult = (props) => {
    const {spell} = props
    return(
      <div className="spell-container">
        <h2>{spell.name}</h2>
        <div className="spell-info">
          <p>Level: {spell.level}</p>
          <p>Cast Time: {spell.casting_time}</p>
          <p>Range/Area: {spell.range}</p>
          <p>School: {spell.school}</p>
          <p>Duration: {spell.duration}</p>
        </div>
        <div className="spell-description">
          <p>{spell.desc}</p>
          <p>{spell.higher_level}</p>
          <h4>Classes: {spell.dnd_class}</h4>
        </div>
      </div>
    )
}

export default SearchResult;