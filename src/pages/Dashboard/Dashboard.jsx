import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { ROUTES } from '../../routes/routes'
import styles from './Dashboard.module.css'
import LineChart from '../../components/LineChart/LineChart'

const cards = [
  {
    title: 'Saldo do mês',
    value: 'R$ 4.250,00',
    description: 'Receitas - despesas',
  },
  {
    title: 'Atividades concluídas',
    value: '17',
    description: 'Total desta semana',
  },
  {
    title: 'Sequência de hábitos',
    value: '8 dias',
    description: 'Rotina matinal ativa',
  },
]
const lineChartData = [
  { month: "Jan", eficiencia: 62, meta: 75 },
  { month: "Fev", eficiencia: 68, meta: 75 },
  { month: "Mar", eficiencia: 74, meta: 75 },
  { month: "Abr", eficiencia: 71, meta: 80 },
  { month: "Mai", eficiencia: 79, meta: 80 },
  { month: "Jun", eficiencia: 83, meta: 80 },
  { month: "Jul", eficiencia: 78, meta: 85 },
  { month: "Ago", eficiencia: 85, meta: 85 },
  { month: "Set", eficiencia: 88, meta: 85 },
  { month: "Out", eficiencia: 84, meta: 90 },
  { month: "Nov", eficiencia: 90, meta: 90 },
  { month: "Dez", eficiencia: 92, meta: 90 },
]

function Dashboard() {
  const navigate = useNavigate()

  return (
    <>
      <section className={styles.cardsGrid}>
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            value={card.value}
            description={card.description}
          />
        ))}
      </section>
      <section className={styles.lineChart}>
          <LineChart
            title="Eficiência Mensal"
            value={lineChartData}
            xKey="month"
            lineKey="eficiencia"
            height={300}
            width="100%"
          />
      </section>

      <button type="button" className={styles.logoutButton} onClick={() => navigate(ROUTES.LOGIN)}>
        Sair
      </button>
    </>
  )
}

export default Dashboard