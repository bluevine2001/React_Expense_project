import React from "react";
import { useState } from "react";
import MovieElement from "./MovieElement";
import "./css/ApiFetching.css";

const ApiFetching = () => {
  const [movies, setMovies] = useState("");

  async function fetchApiHandler() {
    const url = "https://swapi.dev/api/films/";
    const resp = await fetch(url);
    //.then((response) => response.json())
    const data = await resp.json();
    console.log(data);
    //.then((data) => {
    const moviesTab = data.results.map((movie) => [
      movie.title,
      movie.opening_crawl,
    ]);
    console.log(moviesTab);
    setMovies(moviesTab);
    // });
  }

  return (
    <React.Fragment>
      <div className="fetchbtn">
        <button onClick={fetchApiHandler}>Fetch Movies</button>
      </div>
      {movies &&
        movies.map((movie) => (
          //<p>{console.log(movie)}</p>
          <MovieElement name={movie[0]} synopsis={movie[1]} />
        ))}
    </React.Fragment>
  );
};

export default ApiFetching;
