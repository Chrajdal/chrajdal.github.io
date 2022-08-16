import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)
    const { feedbackEdit } = useContext(FeedbackContext);

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit]);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={i + 1}>
                    <input
                        id={`num-${i + 1}`}
                        type='radio'
                        name='rating'
                        value={i + 1}
                        checked={selected === i + 1}
                        onChange={handleChange}
                    />
                    <label htmlFor={`num-${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect;