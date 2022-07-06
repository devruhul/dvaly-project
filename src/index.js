import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

=======
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
>>>>>>> d856b5584674c9d3eed33078575e2abea72bf4cd
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
