import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Analytics } from './analytics-tracker'
import { AuthProvider } from './contexts/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Analytics />
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
