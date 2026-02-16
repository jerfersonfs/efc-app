import Login from './pages/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES} from './routes/routes'
import './App.css'
import AppLayout from './layouts/AppLayout'
import { ROUTE_COMPONENTS } from './routes/routeConfig'

/*function navigateTo(pathname, setPathname) {
  const normalized = normalizePath(pathname)

  if (normalized !== window.location.pathname) {
    window.history.pushState({}, '', normalized)
  }

  setPathname(normalized)
}*/

function App() {

return(
  <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />

      <Route element={<AppLayout />}>
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
)}

export default App