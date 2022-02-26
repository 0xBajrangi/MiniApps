import React from 'react'
import {createContext , useState } from 'react'
const Feedback = createContext();
export  function FeedbackContext({children}) {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "this item is from context",
            rating :10,
    }
    ])
    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((feedback) => feedback.id !== id));
      }
    };

    const addFeedback = (newfeedback) => {
      setFeedback([...feedback, newfeedback]);
    };
  return (
      <Feedback.Provider value={{ feedback ,addFeedback,deleteFeedback}}>
      {children}
    </Feedback.Provider>
  )
}

export default Feedback;


