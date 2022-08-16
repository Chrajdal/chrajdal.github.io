import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)

    let average = 0.0;
    if (feedback !== null && feedback.length > 0) {
        average = Math.round(feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length)
        average = parseFloat(average.toFixed(1));
    }

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} reviews</h4>
            <h4> Average rating: {average}</h4>
        </div>
    )
}

export default FeedbackStats