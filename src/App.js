import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid'

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

// go back to https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29767836#content section 4.24 to integrate a cool animation

function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()

        // the state is immutable, so we HAVE to make a copy of it in order to truly change it
        // using the spread operator, we bring in all existing items in the list
        // here we're setting feedback to be all existing items plus the newFeedback we just added
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you want to delete?')){
            // filters out the item we're deleting if it's a match
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback} />
            {/* feedback={feedback} -> 1st feedback == the name of the prop, 2nd feedback == what we named our state  */}
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;