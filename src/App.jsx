import { useState,useEffect, useMemo } from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import './App.css'

const VALID_ROUTES = ['/login', '/dashboard']

function normalizePath(pathname) {
  return VALID_ROUTES.includes(pathname) ? pathname : '/login'
}

function navigateTo(pathname, setPathname) {
  const normalized = normalizePath(pathname)

  if (normalized !== window.location.pathname) {
    window.history.pushState({}, '', normalized)
  }

  setPathname(normalized)
}


function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    if (!VALID_ROUTES.includes(window.location.pathname)) {
      window.history.replaceState({}, '', '/login')
    }

    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const route = useMemo(() => {
    if (pathname === '/dashboard') {
      return <Dashboard onNavigate={(nextPath) => navigateTo(nextPath, setPathname)} />
    }

    return <Login onNavigate={(nextPath) => navigateTo(nextPath, setPathname)} />
  }, [pathname])

  return <div className="app">{route}</div>
}

export default App