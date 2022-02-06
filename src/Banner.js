import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "./axios";
import requests from "./request";
import "./banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchdata();
  }, []);

  console.table(movie);

  //   function truncate(str, n) {
  //     return str.length > n ? str.substr(0, n - 1) + "..." : str;
  //   }

  return (
    <header
      className="banner"
      style={{
        background: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* background image */}
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* 2 button */}

        <h1 className="banner__discription">
          {/* {truncate(movie?.overview, 150)} */}
          {movie?.overview}
        </h1>
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
