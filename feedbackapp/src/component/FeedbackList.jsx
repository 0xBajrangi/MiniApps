import React from 'react'
import FeedbackItem from "./FeedbackItem"
function FeedbackList({feedback,handleDelete}) {
    if (!feedback || feedback.length === 0) return <p>No Feedback</p>
    console.log(feedback)
    return (
    <div className="feedback-list">
            {
                feedback.map((el) => {
                    return <FeedbackItem key={el.id} id={el.id} rating={el.rating} text={el.text}
                    handleDelete={handleDelete}
                    />
                })
    }
    </div>
  )
}



export default FeedbackList
