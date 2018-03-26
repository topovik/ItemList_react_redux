import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { store } from './store/createStore'
import './components/css/index.css'
import { Provider } from 'react-redux'

render(<Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'))