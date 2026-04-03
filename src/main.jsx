import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProviderCustom } from './context/ThemeContext.jsx'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/Authcontext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProviderCustom>
    <StrictMode>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
    </StrictMode>,
  </ThemeProviderCustom>
)