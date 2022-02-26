import React,{useContext} from 'react'
import Feedback from "../context/FeedbackContext";

export default function FeedbackStats() {
  const { feedback } = useContext(Feedback);
  // calculating rating avg
    let avg = feedback.reduce((ac, el) => {
        return ac + el.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
          <h4>Average Rating : {isNaN(avg)?0:avg.toFixed(1)}</h4>
    </div>
  );
}
