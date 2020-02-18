import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => (

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button"> <Link to="/">Home</Link></div>
  //I'm unsure if I did the button correctly-it navigates back to the home page but I'm not sure if I coded it correctly
  </div>
);

export default SavedList;
