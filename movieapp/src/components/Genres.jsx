import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const fetchGenres = async () => {
    let data = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setGenres(data.data.genres);
  };
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]);
    };
  }, []);
    
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter(x => x.id != genre.id))
        setPage(1)
    }
    
    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter(x => x.id != genre.id));
        setGenres([...genres, genre]);
        setPage(1)
    }
  console.log(genres);
  return (
    <div style={{ padding: "10px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => {
          return (
            <Chip style={{ margin: "2px 3px",color:"black",backgroundColor:"#FA58B6" }} label={genre.name} color="primary" onClick={() =>handleRemove(genre)} clickable />
          );
        })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip  style={{ margin: "2px 3px",backgroundColor: "white" ,color:"black"}} label={genre.name} color="primary"onClick={()=>handleAdd(genre)}  clickable />
          );
        })}
    </div>
  );
};

export default Genres;
