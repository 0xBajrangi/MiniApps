import React,{useContext} from 'react';
import { nanoid } from 'nanoid';
import Card from './shared/Card';
import Button from './shared/Button';
import Feedback from "../context/FeedbackContext"
import RatingSelect from './RatingSelect';
function FeedbackForm() {
  const { addFeedback } = useContext(Feedback);
  const [text, setText] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [rating,setRating] = React.useState(0)
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null)
    } else if (text!=="" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");

    } else {
      setMessage("");
      setBtnDisabled(false);

    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: nanoid(),
        text,
        rating
      }
      console.log(newFeedback);
      addFeedback(newFeedback);
       setBtnDisabled(true);
      setMessage(null);
      setText("")
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate Us ?</h2>
        <RatingSelect select={(rating)=> setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {console.log(message)}
        {message && <div classname="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
