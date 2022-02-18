import React,{useState,useEffect} from "react";
import "./contentModal.css"
import "../../Styles/singleMovie.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { unavailable, unavailableLandscape,img_500 } from "./../../config/config";
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    backgroundColor: "#1A1A40",
    padding: "5px",
    margin: "10px 0",
    borderRadius: "10px",
    position: "relative",
    color: "white",
    boxShadow: "rgb(250 88 182 / 21%) 0px 0px 0px 3px",
        transitionDuration: "0.75s",
        alignItems: "stretch",
    fontFamily:"monospace",
    "&:hover": {
        backgroundColor: "white",
        color:"black"
       
    },
  },
  paper: {
    width: "80%",
    height: "80%",
    backgroundColor: "#1A1A40",
      color: "white",
    
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #.c000",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({ children, media_type, id }) {
    const [content, setContent] = useState([]);
const [video,setVideo] = useState("");

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    console.log(content)
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // console.warn(media_type, id);
    
    const fetchData = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setContent(data)
    }
    const fetchVideo = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setVideo(data.results[0]?.key);
    };
    fetchVideo();
    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);

  return (
    <div>
          <Button
            className={classes.root}
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <Box sx={style} className={classes.paper}>
              <div className="contentModal">
                <img
                  className="content_protrait"
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                />
                <img
                  className="content_landscape"
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                />
                <div className="ContentModal_about">
                  <span className="ContentModal_title">
                    {content.name || content.title}(
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  <span>
                    {content.tagline && (
                      <i className="tagline ">{content.tagline}</i>
                    )}
                  </span>
                  <span>
                    {content.overview && (
                      <i className="description ">{content.overview}</i>
                    )}
                  </span>
                  <div></div>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="error"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    WATCH THE TRAILER
                  </Button>
                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
