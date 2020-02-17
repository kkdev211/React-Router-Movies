import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div className="App">
      <nav>
      <SavedList list={savedList} />
      <div className="nav-links">
        <Link to="/">Movie List></Link>
        <Link to="/movies"> Movie></Link>
      </div>
      </nav>
      <Route path="/" exact component={MovieList} />
  
      <Route
        path="/movies/:id"
        render={routeProps => {
          console.log("routeProps", routeProps);
          return(
            <Movie
            match={routeProps.match}
            history={routeProps.history}
            location={routeProps.location}
          />
          );
        }}
      />
    </div>
  );
};

export default App;
