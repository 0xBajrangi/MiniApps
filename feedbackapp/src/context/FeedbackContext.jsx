import React from 'react';
import {nanoid} from "nanoid"
import { createContext, useState } from 'react';
const Feedback = createContext();
export function FeedbackContext({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item is from context',
      rating: 10,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const editFeedback = (item) => {
      setFeedbackEdit({ item, edit: true });
      console.log(feedbackEdit);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

    const addFeedback = (newfeedback) => {
        newfeedback.id = nanoid();
    setFeedback([...feedback, newfeedback]);
  };

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((el) => el.id === id? updItem:el))
    }
  return (
    <Feedback.Provider
      value={{ feedback, addFeedback, deleteFeedback, editFeedback,feedbackEdit,updateFeedback }}
    >
      {children}
    </Feedback.Provider>
  );
}

export default Feedback;
