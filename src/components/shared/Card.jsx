import React from 'react'
import PropTypes from 'prop-types'
// imports children props from ...
function Card({children, reverse}) {
    // CONDITIONAL CLASS EXAMPLE:
//   return (
//     // conditional class: add 'card' as a classname but also if reverse == true, then add 'reverse' as a classname to the card
//     <div className={`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//     )


// CONDITIONAL STYLING EXAMPLE
    return(
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : 'rgba(0,0,0,0.4)'
            }}>
            {children}
        </div>
    )


}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool


}

export default Card