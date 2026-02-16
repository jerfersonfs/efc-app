import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { ROUTE_META } from '../routes/routeConfig'

export default function AppLayout() {
  const location = useLocation()
  const meta = ROUTE_META[location.pathname] ?? {}

  return (
    <div className="app">
      <div className="layout">
        <Sidebar />

        <main className="layout__main">
          <Header title={meta.title} subtitle={meta.subtitle} />
          <Outlet />
        </main>
      </div>
    </div>
  )
}