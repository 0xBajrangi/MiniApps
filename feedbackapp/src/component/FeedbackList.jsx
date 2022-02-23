import React from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <p>No Feedback</p>;
  console.log(feedback);

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((el) =>  <motion.div
            key={el.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={el.id}
              id={el.id}
              rating={el.rating}
              text={el.text}
              handleDelete={handleDelete}
            />
          </motion.div>
            
        )}
      </AnimatePresence>
    </div>
  );

  //   return (
  //   <div className="feedback-list">
  //           {
  //               feedback.map((el) => {
  //                   return <FeedbackItem key={el.id} id={el.id} rating={el.rating} text={el.text}
  //                   handleDelete={handleDelete}
  //                   />
  //               })
  //   }
  //   </div>
  // )
}

export default FeedbackList;
