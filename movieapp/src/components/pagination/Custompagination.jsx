import { Pagination } from '@mui/material';
import React from 'react';
import { makeStyles } from "@mui/styles"
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "dark",
  },
});
const useStyles = makeStyles({
    root: {
        
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: "20px"
    
    },
    ul: {
        color: "white",
       
    }
})
const Custompagination = ({ setPage,numberOfPages=10 }) => {
    
    const classes = useStyles();
    const handlePageChange = (page) => {
        console.log(page)
        setPage(page);
        window.scroll(0, 0);
    }
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            className={`${classes.root} ${classes.ul}`}
            count={numberOfPages}
                    color="secondary"
                    hideNextButton
          />
        </ThemeProvider>
      </div>
    );
};

export default Custompagination;