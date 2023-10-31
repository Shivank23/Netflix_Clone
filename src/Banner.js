import React, { useEffect, useState } from "react";
import "./banner.css";
import requests from "./request";


const Banner = (props) => {
  const baseUrl = "http://api.themoviedb.org/3";
  const url = `${baseUrl}${requests.fetchNetflix0riginals}`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const request = await data.json();

      setMovie(
        request.results[Math.floor(Math.random() * request.results.length - 1)]
      );
    };

    fetchData();
  }, [url]);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">List</button>
          <button className="banner_button">Mylist</button>
        </div>
        <h1 className="banner_description">
        {truncate(movie?.overview,150)}
        </h1>
      </div>
      <div className="banner--fadebottom"/>
      {/* Title*/}
      {/*div>> 2 buttons */}
      {/*descriptoion */}
    </header>
  );
};

export default Banner;
