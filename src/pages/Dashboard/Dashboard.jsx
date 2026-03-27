import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { ROUTES } from '../../routes/routes';
import styles from './Dashboard.module.css';
import LineChart from '../../components/LineChart/LineChart';
import DonutChart from '../../components/DonutChart/DonutChart';
import { Box} from '@mui/material';

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
      <Box variant="section" className={styles.cardsGrid}>
        {cards.map((card) => (
          <Card
            className={styles.cardHead}
            key={card.title}
            /* acertar parametros*/
          />
        ))}
      </Box>
      <Box variant="section" className={styles.chartsRow}>
          <Box variant="div" className={styles.lineChart}>
            <LineChart
              className={styles.line}
              title="Eficiência Mensal"
              data={lineChartData}
              xKey="month"
              lineKey="eficiencia"
              lineKey2="meta"
              height={300}
            />
          </Box>
           <Box variant="div" className={styles.donut} width={520}>
            <DonutChart
              title="Overview"
              height={300}
              data={[
                { name: "Concluído", value: 120 },
                { name: "Em andamento", value: 60 },
                { name: "Pendente", value: 30 }
              ]}
              dataKey="value"
              nameKey="name"
            />
      </Box>
      </Box>
    </>
  )
}

export default Dashboard