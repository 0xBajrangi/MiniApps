import React from 'react'
import { useState } from 'react';
import {FaTimes} from "react-icons/fa"
import Card from './shared/Card';

function FeedbackItem({ rating, text, id,handleDelete }) {
    const handleClick = (elId) => {
       handleDelete(elId);
    
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
