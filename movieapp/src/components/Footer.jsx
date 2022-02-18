import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from '@mui/icons-material/Movie';
import { makeStyles } from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom"



const useStyles = makeStyles({
  root: {
    width: '100%',
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    
  },
});
export default function SimpleBottomNavigation() {

  const classes = useStyles();
  console.log(classes)
  const [value, setValue] = React.useState(0);
  console.log(value)
  
  const navigate = useNavigate();
  React.useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/series");
    else if (value === 2) navigate("/movies")
    else if (value === 3) navigate("/search")
  },[value])
  return (
    <BottomNavigation
      style={{ backgroundColor: "#1A1A22" }}
      showLabels
      className={classes.root}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV shows"
        icon={<LiveTvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
