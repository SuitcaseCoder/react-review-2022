import React from 'react'

import PropTypes from 'prop-types'
// what does {children} do?
// the css file holds different stylings based on the button version
// type allows us to select a 'submit' btn or other
function Button({ children, version, type, isDisabled }) {
  return (
    <button
        type={type}
        disabled={isDisabled}
        className={`btn btn-${version}`}
    >
        {children}
    </button> 
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button