import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './main/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="Music-App">
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
)
