import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
    }

    fetchData();
  }, [props.fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h1>{props.title}</h1>

      {/* container -> posters */}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
