import React, {useState} from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

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
            <FeedbackStats feedback={feedback} />
            {/* feedback={feedback} -> 1st feedback == the name of the prop, 2nd feedback == what we named our state  */}
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;