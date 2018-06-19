import React from 'react'
import PropTypes from 'prop-types'
/**
 * Klasa wizualnego komponentu wiadomości teskstowej. Visual component of text message form.
 * @reactProps {string} message - Właściwość przechowująca wiadomość. Property holding message payload.
 * @reactProps {string} author - Przechowująca autora wiadomości. Holds message author.
 */
const Message = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message
