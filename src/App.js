import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavLink } from 'react-router-dom'

import Header from './components/Header';
import Card from './components/shared/Card';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';

import {FeedbackProvider} from './context/FeedbackContext'

//  POST used to show how to useParams & redirect using navigate with routes:
// import Post from './components/Post';

// go back to https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29767836#content section 4.24 to integrate a cool animation

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    // the state is immutable, so we HAVE to make a copy of it in order to truly change it
    // using the spread operator, we bring in all existing items in the list
    // here we're setting feedback to be all existing items plus the newFeedback we just added
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      // filters out the item we're deleting if it's a match
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
                // parent element still required
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats />
                {/* feedback={feedback} -> 1st feedback == the name of the prop, 2nd feedback == what we named our state  */}
                <FeedbackList
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<About />} />

          {/* <Route path="/post/*" element={<h1>Hello World</h1>} /> */}

        </Routes>

        <AboutIconLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;

/* 
How to add change color of active nav link using NavLink: (then add css to class .active)
        <Card>
            <NavLink to='/' activeClassName='active'>
                Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
                About
            </NavLink>
        </Card>

 */


/*
    {  HOW TO ADD PARAMS VIA ROUTES: }
//   <Route path='/post/:id/:name' element={<Post />}>
    </Route>

*/