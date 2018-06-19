import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

/**
 * Klasa wizualnego komponentu listy wiadomości. Visual component of message list.
 * @reactProps {array} messages - Właściwość przechowująca wiadomości. Property holding messages.
 */
const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          {...message}
        />
    ))}
    </ul>
  </section>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessagesList
