import React from 'react'
import { useState, useContext } from 'react';
import {FaTimes} from "react-icons/fa"
import Card from './shared/Card';
import Feedback from "../context/FeedbackContext"

function FeedbackItem({ rating, text, id }) {
  const {deleteFeedback} = useContext(Feedback)
    const handleClick = (elId) => {
       deleteFeedback(elId);
    
}
 
    
  return (
      <Card >
          <div className="num-display">
           {rating}
          </div>
          <button className="close" onClick={() =>handleClick(id)}>
              <FaTimes color="purple" /> 
          </button>
          <div className="text-display">{text}</div>
       
      
    </Card>
  )
}

export default FeedbackItem
