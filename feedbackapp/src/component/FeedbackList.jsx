import React,{useContext} from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import Feedback from '../context/FeedbackContext';
import Spinner from  "./shared/Spinner"

function FeedbackList() {
  const { feedback, deleteFeedback ,isLoading} = useContext(Feedback);
  // console.log(stats);
  if (!isLoading    && (!feedback || feedback.length === 0)) return <p>No Feedback</p>;
  console.log(feedback);

  return isLoading ? <Spinner /> :(
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((el) => (
          <motion.div
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
              item={el}
              deleteFeedback={deleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //   return (
  //   <div className="feedback-list">
  //           {
  //               feedback.map((el) => {
  //                   return <FeedbackItem key={el.id} id={el.id} rating={el.rating} text={el.text}
  //                                deleteFeedback={deleteFeedback}

  //                   />
  //               })
  //   }
  //   </div>
  // )
}

export default FeedbackList;
