

import React, { useState } from 'react';
import "./index.css"
import FeedbackList from './component/FeedbackList';
import FeedbackData from './data/FeedBackData';
import Header from './component/Header'
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Card from "./component/shared/Card"
import About from './pages/About';
import AboutIconLink from './component/AboutIconLink';
import { FeedbackContext } from './context/FeedbackContext';


function App() {




  return (
    <FeedbackContext>

      <Router>
        <Header />

        <div className="container">
        <Card className="container" >
          <NavLink to="/" activeclassname="active">Home</NavLink>
          <NavLink to="/about" activeclassname="active">About</NavLink>

        </Card>
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList
                />
              </>
            }>


            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <AboutIconLink />
      </Router>
    </FeedbackContext>
  )
}


export default App;
