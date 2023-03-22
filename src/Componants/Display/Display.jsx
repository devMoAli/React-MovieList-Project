import React from "react";
import "./Display.css";
import StrBtn from "../Btn/Btn";

const Display = (props) => {
  const movies = props.moviesList.map((movie) => {
    return (
      <React.Fragment key={movie.Id}>
      
      <div className="container">
        <div className="card">
          
          <h5>Movie: {movie.Title}</h5>
          <h5>Released: {movie.Year}</h5>
          <h5>imdb Rating: {movie.Rate}</h5>
          <h5>Movie Poster: </h5>
          <img src={movie.Poster} alt="" />
          <br />
          <StrBtn str={movie.Story} />
        </div>
      </div></React.Fragment>
    );
  });
  return <section>{movies}</section>;
};

export default Display;
