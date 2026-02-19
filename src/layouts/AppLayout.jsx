import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { ROUTE_META } from '../routes/routeConfig'

export default function AppLayout() {
  const location = useLocation()

  const financeDetailMeta = {
    title: 'Detalhes financeiros',
    subtitle: 'Acompanhe informações específicas de cada indicador',
  }

  const meta = ROUTE_META[location.pathname] ?? (location.pathname.startsWith('/finance/details/') ? financeDetailMeta :{})

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