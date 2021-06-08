// From https://youtu.be/9zySeP5vH9c?list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {store} from './app/store'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
)
