import React from "react";
import "./Display.css";
import StrBtn from "../Btn/Btn";

const Display = (props) => {
  const movies = props.moviesList.map((movie) => {
    return (
      <React.Fragment key={movie.Id}>
      
      <div className="container">
        <div className="card">
          
          <h3>Movie: {movie.Title}</h3>
          <h3>Released: {movie.Year}</h3>
          <h3>imdb Rating: {movie.Rate}</h3>

          <h3>Movie Poster: </h3>
          <img src={movie.Poster} alt="" />
          <StrBtn str={movie.Story} />
        </div>
      </div></React.Fragment>
    );
  });
  return <section>{movies}</section>;
};

export default Display;
