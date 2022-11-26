import React from 'react' // not necessary anymore
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

// instead of passing in all the props, we can replace props with curly brackets + whatever specific props we want to bring in
function Header({text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <Link to='/'>
            <h2>{text}</h2>
            </Link>
        </div>
    </header>

  )
}

// we can set default props specific to this component to be used in this component, default if nothing is passed in
Header.defaultProps = {
    text: 'Feedback UI', 
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

// proptypes helps us define what TYPE of props we're using here, extra check , useful for Typescript

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header