import React from 'react'
import PropTypes from 'prop-types'

/**
 * Klasa wizualnego komponentu panelu bocznego. Visual component of sidebar.
 * @reactProps {array} users - Przechowuje liste aktywnych użytkowników. Holds active users list.
 */

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Sidebar
