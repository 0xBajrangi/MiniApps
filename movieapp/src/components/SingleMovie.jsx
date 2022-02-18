import React from "react";
import { img_300, unavailable } from "./../config/config";
import "../Styles/singleMovie.css";
import Badge from "@mui/material/Badge";
import ContentModal from "./ContentModal/ContentModal";

const SingleMovie = ({ id, poster, title, date, media_type, vote_avg }) => {
   console.log("props", id, poster, title, date, media_type, vote_avg);
  
  return (
    <ContentModal media_type={media_type} id = {id} >
      <Badge
        badgeContent={vote_avg}
        color={vote_avg > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subtitle">
        <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
        <span>{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleMovie;
