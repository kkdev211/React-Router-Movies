import React from 'react';

const SavedList = props => (

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <button className="home-button"
    onClick={() => props.history.push("/")}
    >
      Home
    </button>
  </div>
);

export default SavedList;
