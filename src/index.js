import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { userServices } from './services/auth'
import { store } from './store'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const st = store
userServices.logout()

ReactDOM.render(
  <Provider store={st}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
