import {useState} from 'react'


function FeedbackItem() {

    const [rating, setRating] = useState(7);
    const [text, setText] = useState('example of a feedback item text');

    const handleClick = () => {

        // pasing a function to a setSomething hook fn, allows us to accept the previous/current value of state which gets accepted into the callback fn
        setRating((prev)=>{
            console.log(prev)
            return prev + 1
        });
    }

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">
           {text}
        </div>

        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem