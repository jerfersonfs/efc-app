import Activities from '../pages/Activities/Activities'
import Dashboard from '../pages/Dashboard/Dashboard'
import Finance from '../pages/Finance/Finance'
import FinanceDetail from '../pages/FinanceDetail/FinanceDetail'
import Habits from '../pages/Habits/Habits'
import { ROUTES } from './routes'

export const ROUTE_META = {
  [ROUTES.DASHBOARD]: {
    title: 'Dashboard',
    subtitle: 'Resumo rápido da sua organização pessoal',
  },
  [ROUTES.ACTIVITIES]: {
    title: 'Atividades',
    subtitle: 'Planeje e acompanhe seu ritmo de tarefas',
  },
  [ROUTES.FINANCE]: {
    title: 'Finanças',
    subtitle: 'Controle receitas, despesas, investimentos e saldo',
  },
  [ROUTES.HABITS]: {
    title: 'Hábitos',
    subtitle: 'Acompanhe sua consistência diária',
  },
}


export const ROUTE_COMPONENTS = [
  { path: ROUTES.DASHBOARD, component: Dashboard },
  { path: ROUTES.ACTIVITIES, component: Activities },
  { path: ROUTES.FINANCE, component: Finance },
  { path: ROUTES.FINANCE_DETAILS, component: FinanceDetail},
  { path: ROUTES.HABITS, component: Habits },
]

export const SIDEBAR_ROUTES = [
  { id: 'dashboard', label: 'Dashboard', path: ROUTES.DASHBOARD },
  { id: 'activities', label: 'Atividades', path: ROUTES.ACTIVITIES },
  { id: 'finance', label: 'Finanças', path: ROUTES.FINANCE },
  { id: 'habits', label: 'Hábitos', path: ROUTES.HABITS },
]