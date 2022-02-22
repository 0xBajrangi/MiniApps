import React from 'react'

export default function FeedbackStats({ feedback }) {
  // calculating rating avg
    let avg = feedback.reduce((ac, el) => {
        return ac + el.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
          <h4>Average Rating : {isNaN(avg)?0:avg}</h4>
    </div>
  );
}
