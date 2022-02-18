import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleMovie from "../../components/SingleMovie";
import "./trending.css";
import Custompagination from "./../../components/pagination/Custompagination";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  //   console.log(process.env.REACT_APP_API_KEY);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
    
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);
  //   console.log(content);
  return (
    <div>
      <span className="pageTitle">Trending</span>
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
          ))
        }
      </div>
      <Custompagination setPage={setPage} />
    </div>
  );
}

export default Trending;
