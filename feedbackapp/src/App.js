

import React,{useState} from 'react';
import "./index.css"
import FeedbackList from './component/FeedbackList';
import FeedbackData from './data/FeedBackData';
import Header from './component/Header'
import FeedbackStats from "./component/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
   
      setFeedback(feedback.filter(feedback => feedback.id !== id));
 }
    
}


  return (
    <>
      <Header  />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
        handleDelete={handleDelete}/>
      </div>
    </>
  )
}


export default App;
