import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { createContext, useState } from 'react';
const Feedback = createContext();
export function FeedbackContext({ children }) {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);
  // add feedback
  const fetchFeedback = async () => {
    const res = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    );
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
    console.log(feedbackEdit);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = async (newfeedback) => {
    const res = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newfeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUt',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updItem),
    });
      const data = await response.json();

    setFeedback(feedback.map((el) => (el.id === id ? data : el)));
  };
  return (
    <Feedback.Provider
      value={{
        feedback,
        addFeedback,
        isLoading,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </Feedback.Provider>
  );
}

export default Feedback;
