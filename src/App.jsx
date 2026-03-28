import Login from './pages/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ROUTES} from './routes/routes'
import './App.css'
import AppLayout from './layouts/AppLayout'
import { ROUTE_COMPONENTS } from './routes/routeConfig'
import { getTheme } from './theme/theme'

function App() {
  const [mode, setMode] = useState("light")

  const theme = useMemo(() => getTheme(mode), [mode])

  const toggleTheme = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login/>}/>

        <Route element={<AppLayout toggleTheme={toggleTheme} />}>
          {ROUTE_COMPONENTS.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App