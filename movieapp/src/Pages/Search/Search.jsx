import React, { useState } from "react";
import "../Trending/trending.css";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import { useEffect } from "react";
import "../Trending/trending.css";
import SingleMovie from "./../../components/SingleMovie";
import Custompagination from "./../../components/pagination/Custompagination";

function Search(props) {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const darktheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  console.log(search);

  const handleChange = (event, newValue) => {
    setType(newValue);
    console.log(type);
  };
  const fetchSearch = async () => {
    if (search === "") return;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "movie" : "tv"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&query=${search}&page=${page}`
    );
    setContent(data.results);
    setTotalPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);

    fetchSearch();
    return () => {};
  }, [search, type, page]);
  return (
    <div>
      <ThemeProvider theme={darktheme}>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            gap: "10px",
            color: "white",
          }}
        >
          <TextField
            style={{ flex: 1, color: "white" }}
            id="outlined-basic"
            label="Search for Movie/Series"
            variant="filled"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#FA58B6" }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" value={1} />
          <Tab style={{ width: "50%" }} label="Search Series" value={0} />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((el) => (
            <SingleMovie
              key={el.id}
              id={el.id}
              poster={el.poster_path}
              title={el.title || el.name}
              date={el.release_date || el.first_air_date}
              media_type={type ? "movie" : "tv"}
              vote_avg={el.vote_average}
            />
          ))}
      </div>
      {search &&
        !content &&
        (type ? <h1>No Movie was Found</h1> : <h1>No Movie was Found</h1>)}

      {setTotalPages > 1 && (
        <Custompagination setPage={setPage} numberOfPages={totalPages} />
      )}
    </div>
  );
}

export default Search;
