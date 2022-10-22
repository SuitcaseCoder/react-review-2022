import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {



  return (
    <Card>
        <div className="num-display">{item.rating}</div>

        {/* if I want to pass anything into 'handleClick' then the arrow function is necessary */}
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.protoTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem