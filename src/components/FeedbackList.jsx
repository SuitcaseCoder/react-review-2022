import React from 'react'
import {useContext} from 'react'
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList({handleDelete}) {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

  return (
    <div className="feedback-list">
        {/* because we're returning JSX, what's being returned must be wrapped in parenthesis 🤦🏼‍♀️ */}
        {feedback.map((item)=>(
            <FeedbackItem 
                key={item.id} 
                item={item} 
                handleDelete={handleDelete}/>
        ))}
    </div>
  )
}


export default FeedbackList