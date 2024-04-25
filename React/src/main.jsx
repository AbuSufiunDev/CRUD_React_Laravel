import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Web from './routes/web'
import { ContextProvider } from './context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
     <Web />
    </ContextProvider>
  </React.StrictMode>,
)
