import LandingPage from './landing/LandingPage'
import Login from './pages/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES} from './routes/routes'
import './App.css'
import AppLayout from './layouts/AppLayout'
import { ROUTE_COMPONENTS } from './routes/routeConfig'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}