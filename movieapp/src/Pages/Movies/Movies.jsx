import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Trending/trending.css";
import SingleMovie from "./../../components/SingleMovie";
import Custompagination from "./../../components/pagination/Custompagination";
import Genres from "../../components/Genres"
import useGenre from "../../hooks/useGenre"

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const [genres, setGenres] = useState([]);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const genresforUrl = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genresforUrl}`
    );

    setContent(data.results);
    setTotalPages(data.total_pages);
    // setContent(data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, [page,genresforUrl]);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((el) => (
            <SingleMovie
              key={el.id}
              id={el.id}
              poster={el.poster_path}
              title={el.title || el.name}
              date={el.release_date || el.first_air_date}
              media_type={el.media_type}
              vote_avg={el.vote_average}
            />
          ))}
      </div>
      <Custompagination setPage={setPage} numberOfPages={totalPages} />
    </div>
  );
}

export default Movies;
