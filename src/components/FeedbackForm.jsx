import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackFrom() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        if (e.target.value === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (e.target.value !== '' && e.target.value.trim().length < 10) {
            setBtnDisabled(true);
            setMessage('Please enter at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                rating,
                text
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }
            setText('');
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => (setRating(rating))} />
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type='text' placeholder='Write a review' />
                    <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
                </div>

                {message && <p className='message'>{message}</p>}
            </form>

        </Card>
    )
}

export default FeedbackFrom;