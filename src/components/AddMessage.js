import React from 'react'
import PropTypes from 'prop-types'
/**
 * Klasa wizualnego komponentu pokoju czatowego. Visual component of chatroom.
 * @reactProps {func} dispatch - Funkcja składu pozwalająca na obsługe akcji. Store function for dispatching actions
 */
const AddMessage = (props) => {
  let input

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
