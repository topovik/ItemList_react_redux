import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { store } from './store/createStore'
import './components/css/index.css'

render(<App store={store} />, document.getElementById('root'))