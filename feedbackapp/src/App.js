

import React,{useState} from 'react';
import "./index.css"
import FeedbackList from './component/FeedbackList';
import FeedbackData from './data/FeedBackData';
import Header from './component/Header'
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
   
      setFeedback(feedback.filter(feedback => feedback.id !== id));
 }
    
}

  const addFeedback = (newfeedback) => {
    setFeedback([...feedback,newfeedback]);
  }

  return (
    <>
      <Header  />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
        handleDelete={handleDelete}/>
      </div>
    </>
  )
}


export default App;
