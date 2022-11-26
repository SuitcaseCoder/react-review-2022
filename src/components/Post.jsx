import React from 'react';
// USEPARAMS USED FOR PASSING IN PARAMS VIA ROUTE
// import {useParams} from 'react-router-dom'

// NAVIGATE TO BE USED WITH REDIRECTS
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
  // HOW TO USE PARAMS WITH ROUTES (STEP 2)
  // const params = useParams()

  // TO REDIRECT USING NAVIGATE
  const status = 200

  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }

  if (status === 404) {
    return (
    <Navigate to='/' />
    )
  }

  return (

    <div>

      {/* IF WE WANNA REDIRECT ON A CLICK -> USE THE USENAVIGATE HOOK */}
      <h1>POST</h1>
      <button onClick={onClick}>Click</button>

      <Routes>
        <Route path='post/show'></Route>
      </Routes>


      {/* USED TO BRING IN PARAMS */}
      {/* <h1>Post  {params.id}</h1>
        <p>{params.name}</p> */}
    </div>
  );
}

export default Post;
