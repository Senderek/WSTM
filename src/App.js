import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import { connectedLoginPage } from './containers/Login'
import ChatRoom from './components/ChatRoom'
import PrivateRoute from './components/Root'

const App = () => (

  <div id="container">
    <Switch>
      <PrivateRoute exact path="/" component={ChatRoom} />
      <Route path="/login" component={connectedLoginPage} />
    </Switch>

  </div>
)

export default App
