import React, { useEffect, useState } from "react";
import "./row.css";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
const moviePosterUrl = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const baseUrl = "http://api.themoviedb.org/3";
  const url = `${baseUrl}${props.fetchUrl}`;

  //useState Hooks Defined

  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //Work related to the useEffect
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const request = await data.json();

      setmovies(request.results);
    };
    fetchData();
  }, [url]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="row">
      {/*title*/}
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${moviePosterUrl}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
              className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      {/*container-- images*/}
    </div>
  );
};

export default Row;
