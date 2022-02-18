import React from "react";
import "../Styles/Header.css";

function Header() {
  return <div onClick={()=> window.scroll(0,0)} className="header">📽️ MOVIE-MANIA 📽️</div>;
}

export default Header;
