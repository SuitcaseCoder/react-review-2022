import React, { useState } from 'react'

import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {

    // text -> whatever the user types in the input field
    const [text, setText] = useState('');

    const [rating, setRating] = useState(10);

    //for btn prop
    const [btnDisabled, setbtnDisabled] = useState(true);

    // message
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === ''){
            setbtnDisabled(true);
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true);
            setMessage('text must be at least 10 characters')
        } else {
            setMessage(null)
            setbtnDisabled(false)
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text: text,
                rating:rating
            }

            handleAdd(newFeedback)

            setText('') // empties out string after submitted
        }

    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How Would You Rate Your Service With Us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder='write a review' 
                    value={text}
                />
                <Button 
                    type='submit' 
                    isDisabled={btnDisabled}
                >Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
  
}

export default FeedbackForm