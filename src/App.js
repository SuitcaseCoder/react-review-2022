import React, {useState} from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";


function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
        <Header />
        <div className="container">
            {/* feedback={feedback} -> 1st feedback == the name of the prop, 2nd feedback == what we named our state  */}
            <FeedbackList feedback={feedback} />
        </div>
        </>
    )
}

export default App;