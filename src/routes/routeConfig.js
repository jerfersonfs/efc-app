import Activities from '../pages/Activities/Activities'
import Dashboard from '../pages/Dashboard/Dashboard'
import Finance from '../pages/Finance/Finance'
import FinanceDetail from '../pages/FinanceDetail/FinanceDetail'
import Habits from '../pages/Habits/Habits'
import  Settings  from '../pages/settings/Settings'
import Profile from '../pages/Profile/Profile'
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
  [ROUTES.SETTINGS]: {
    title: 'Configurações',
    subtitle: 'Suas configurações de usuário'
  },
  [ROUTES.PROFILE]: {
    title: 'Perfil do usuário',
    subtitle: 'Seu perfil'
  }
}


export const ROUTE_COMPONENTS = [
  { path: ROUTES.DASHBOARD, component: Dashboard },
  { path: ROUTES.ACTIVITIES, component: Activities },
  { path: ROUTES.FINANCE, component: Finance },
  { path: ROUTES.FINANCE_DETAILS, component: FinanceDetail},
  { path: ROUTES.HABITS, component: Habits },
  { path: ROUTES.SETTINGS, component: Settings},
  { path: ROUTES.PROFILE, component: Profile}
]

export const SIDEBAR_ROUTES = [
  { id: 'dashboard', label: 'Dashboard', path: ROUTES.DASHBOARD },
  { id: 'tasks', label: 'Atividades', path: ROUTES.ACTIVITIES },
  { id: 'finances', label: 'Finanças', path: ROUTES.FINANCE },
  { id: 'habits', label: 'Hábitos', path: ROUTES.HABITS },
]

