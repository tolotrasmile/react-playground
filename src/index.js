import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import counterReducer from './reducers/counterReducer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(counterReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

registerServiceWorker()
